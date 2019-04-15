import * as React from 'react';

export interface IProps {

}

interface IState {

}

class LoginForm extends React.Component<IProps, IState> {
    
    loginWithGitHub = () => {
        console.log('login');
        const options = {
            "method": "GET",
            "headers": {
              "content-type": "application/json",
              "accept": "application/json"
            }
        };
        fetch('http://localhost:8000/records/', options)
            .then(resp => resp.json())
            .then(json => console.log(json));
    }

    render() {
        return (
            <div className="login-form">
                <button className="btn btn__login btn__login-github" onClick={this.loginWithGitHub}>
                    Login with GitHub
                </button>
            </div>
        );
    }
}

export default LoginForm;
