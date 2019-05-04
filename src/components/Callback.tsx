import * as React from 'react';
import { IAuthState } from '../types';
import { IProfileInfoPayload } from '../actions/auth';
// import { Redirect } from 'react-router';

export interface IProps {
    auth: IAuthState;
    history: any;
    setUsername: (payload: string) => any;
    setProfilePictureUrl: (payload: string) => any;
    setAccessToken: (payload: string) => any;
    setProfileInfo: (payload: IProfileInfoPayload) => any;
}

interface IState {
    accessCode: string;
    accessToken: string;    // TODO This needs to be set in store and saved in API
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
        this.postAccessCode();
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
                this.props.setProfileInfo({
                    username: data.data.login,
                    profilePictureUrl: data.data.avatar_url,
                    reposUrl: data.data.repos_url,
                });
            })
            .then(() => {
                console.log("Callback props:", this.props);
                this.props.history.push("/home");
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
                state: "This State is a Test State", // TODO This should be randomized
            }),
        };

        fetch("http://localhost:8000/auth/convert_token/", options)
            .then(resp => resp.json())
            .then(json => {
                const { access_token } = json.data;
                // const scope = json.data.scope;
                // const token_type = json.data.token_type;
                // this.setState({
                //     accessToken: access_token,
                //     scope,
                //     tokenType: token_type,
                // }, () => {
                //     this.getCurrentUser();
                // });
                this.props.setAccessToken(access_token);
                    // .then(() => this.getCurrentUser());
            });
    }

    render() {
        return (
            <div />
        );
    }
};

export default Callback;
