import * as React from 'react';

export interface IProps {

}

interface IState {
    accessCode: string;
    accessToken: string;
    scope: [] | string;
    tokenType: string;
}

class Callback extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            accessCode: "",
            accessToken: "",
            scope: "",
            tokenType: "",
        };
    }

    componentDidMount() {
        this.setState({
            accessCode: this.getAccessCode(),
        })
    }

    getAccessCode = () => {
        return window.location.href.split("code=")[1];
    }

    getCurrentUser = () => {
        // TODO This method should go through the back end

        const options = {
            "method": "GET",
            "headers": {
                "Authorization": `token ${this.state.accessToken}`,
                "content-type": "application/json",
                "accept": "application/json",
            },
        };


        console.log(options);
        // fetch("https://api.github.com/user", options)
        //     .then(resp => resp.json())
        //     .then(json => console.log(json));

        // TODO API_URL should be a global variable or something
        fetch("http://localhost:8000/auth/get_github_self/", options)
            .then(resp => resp.json())
            // .then(json => json.data.json())
            .then(data => console.log(data));
    }

    // getValue = (keyValueString: string) => (keyValueString.split("=")[1]);

    // parseResponse = (data: string) => {
    //     // data.split("&")[0].split("=")
    //     const splitData = data.split("&");
    //     const accessToken = this.getValue(splitData[0]);
    //     const scopes = this.getValue(splitData[1]);
    //     const tokenType = this.getValue(splitData[2]);
    //     this.setState({
    //         accessToken,
    //         scopes,
    //         tokenType,
    //     });
    // }

    postAccessCode = () => {
        // This method POSTs the access_code to back end at /auth/convert_token
        const options = {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json",
            },
            "body": JSON.stringify({
                code: this.getAccessCode(),
                state: "This State is a Test State",
            }),
        };

        // fetch("https://github.com/login/oauth/access_token", options)
        //     .then(resp => console.log(resp));

        fetch("http://localhost:8000/auth/convert_token/", options)
            .then(resp => resp.json())
            // .then(json => console.log(json));
            // .then(json => this.parseResponse(json.data));
            // .then(json => console.log(json));
            // .then(json => this.setState({
            //     accessToken: json.data.access_token,
            //     scopes: json.data.
            // }))
            .then(json => {
                console.log("json.data: ", json.data);
                // const [access_token, scopes, token_type] = json.data;
                // console.log(access_token, scopes, token_type);
                const access_token = json.data.access_token;
                const scope = json.data.scope;
                const token_type = json.data.token_type;
                this.setState({
                    accessToken: access_token,
                    scope,
                    tokenType: token_type,
                });
            });
    }

    renderGetSelfButton = () => {
        console.log("this.state: ", this.state);
        // return this.state.accessToken !== "" ?
        //     (
        //         <button onClick={this.getCurrentUser}>Get Self</button>
        //     ) :
        //     null;
        if (this.state.accessToken === "") {
            return null;
        }
        return (
            <button
                onClick={this.getCurrentUser}
            >
                Get Self
            </button>
        )
    }

    render() {
        return (
            <div>
                We've got a code! It is: {this.getAccessCode()}
                <br/><br/>
                <button onClick={this.postAccessCode}>POST access_code</button>
                <br/><br/>
                accessToken:  {this.state.accessToken}
                <br/>
                scopes:  {this.state.scope}
                <br/>
                tokenType:  {this.state.tokenType}
                <br/><br/>

                {this.renderGetSelfButton()}
            </div>
        )
    }
};

export default Callback;
