import * as React from 'react';

export interface IProps {

}

interface IState {
    accessCode: string;
    authorizationToken: string;
    scopes: [] | string;
    tokenType: string;
}

class Callback extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            accessCode: "",
            authorizationToken: "",
            scopes: "",
            tokenType: "",
        };
    }

    componentDidMount() {
        console.log('callback! code is:' + window.location.href);
        this.setState({
            accessCode: this.getAccessCode(),
        })
    }

    getAccessCode = () => {
        console.log(this.props);
        return window.location.href.split("code=")[1];
    }

    getCurrentUser = () => {
        const options = {
            "method": "GET",
            "headers": {
                "Authorization": `token ${this.state.authorizationToken}`,
                "content-type": "application/json",
                "accept": "application/json",
            },
        };
        fetch("https://api.github.com/user", options)
            .then(resp => resp.json())
            .then(json => console.log(json));
    }

    getValue = (keyValueString: string) => (keyValueString.split("=")[1])

    parseResponse = (data: string) => {
        // data.split("&")[0].split("=")
        const splitData = data.split("&");
        const authorizationToken = this.getValue(splitData[0]);
        const scopes = this.getValue(splitData[1]);
        const tokenType = this.getValue(splitData[2]);
        this.setState({
            authorizationToken,
            scopes,
            tokenType,
        });
    }

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
            .then(json => this.parseResponse(json.data));
    }

    renderGetSelfButton = () => {
        console.log("this.state.authorizationToken: ", this.state.authorizationToken);
        return this.state.authorizationToken !== "" ?
            (
                <button onClick={this.getCurrentUser}>Get Self</button>
            ) :
            null;
    }

    render() {
        return (
            <div>
                We've got a code! It is: {this.getAccessCode()}
                <br/><br/>
                <button onClick={this.postAccessCode}>POST access_code</button>
                <br/><br/>
                authorizationToken:  {this.state.authorizationToken}
                <br/>
                scopes:  {this.state.scopes}
                <br/>
                tokenType:  {this.state.tokenType}
                <br/><br/>

                {this.renderGetSelfButton()}
            </div>
        )
    }
};

export default Callback;
