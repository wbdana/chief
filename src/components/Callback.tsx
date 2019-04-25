import * as React from 'react';

export interface IProps {

}

interface IState {
    accessCode: string;
    accessToken: string;
    scope: [] | string;
    tokenType: string;
    username: string;
}

class Callback extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            accessCode: "",
            accessToken: "",
            scope: "",
            tokenType: "",
            username: "",
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
        const options = {
            "method": "GET",
            "headers": {
                "Authorization": `token ${this.state.accessToken}`,
                "content-type": "application/json",
                "accept": "application/json",
            },
        };

        // TODO API_URL should be a global variable or something
        fetch("http://localhost:8000/auth/get_github_self/", options)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                this.setState({
                    username: data.data.login,
                });
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

        fetch("http://localhost:8000/auth/convert_token/", options)
            .then(resp => resp.json())
            .then(json => {
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
                username:  {this.state.username}

                {this.renderGetSelfButton()}
            </div>
        )
    }
};

export default Callback;
