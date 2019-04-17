import * as React from 'react';

export interface IProps {

}

interface IState {

}

class LoginForm extends React.Component<IProps, IState> {

    loginWithGithub = () => {
        console.log('login with github');
        // const options = {
        //     "method": "GET",
        //     "headers": {
        //       "content-type": "application/json",
        //       "accept": "application/json"
        //     },
        //     // "params": {
        //     //     "client_id": "7d68b23c2a11ef6436b6",
        //     //     "scope": "repo gist",
        //     //     "response_type": "code",
        //     // }
        // };
        // const newWindow = window.open('https://github.com/login/oauth/authorize');
        // console.log(newWindow);

        // fetch("https://github.com/login/oauth/authorize?scope=repo&scope=gist&client_id=7d68b23c2a11ef6436b6", options)
        //     .then(resp => console.log(resp));

        // fetch("http://localhost:8000/auth/login/github", options)
        //     .then(resp => console.log(resp));
        // console.log("options: ", options);

        // TODO Strategy
        // 1. GET https://github.com/login/oauth/authorize with params
        // 2. Redirect to front channel endpoint with access_code
        // 3. Pass access_code to back channel
        // 4. Back channel exchanges access_code for authorization_token (POST)
        // 5. Back channel passes authorization_token back to front channel for further requests from GitHub API


        // const newWindow = window.open("http://localhost:8000/auth/login/github");


        window.location.href = "https://github.com/login/oauth/authorize?scope=repo%20gist&client_id=7d68b23c2a11ef6436b6";
    }

    render() {
        return (
            <div className="login-form">
                <button className="btn btn__login btn__login-github" onClick={this.loginWithGithub}>
                    Login with GitHub in new window
                </button>
            </div>
        );
    }
}

export default LoginForm;
