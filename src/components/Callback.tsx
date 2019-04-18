import * as React from 'react';

export interface IProps {

}

interface IState {
    accessCode: string;
}

class Callback extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            accessCode: "",
        };
    }

    componentDidMount() {
        console.log('callback! code is:' + window.location.href);
        this.setState({
            accessCode: this.getAccessCode(),
        })
    }

    getAccessCode = () => {
        return window.location.href.split("code=")[1];
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
            }),
        };

        // fetch("https://github.com/login/oauth/access_token", options)
        //     .then(resp => console.log(resp));

        fetch("http://localhost:8000/auth/convert_token/", options)
            .then(resp => console.log(resp));
    }

    render() {
        return (
            <div>
                We've got a code! It is: {this.getAccessCode()}
                <br/><br/>
                <button onClick={this.postAccessCode}>POST access_code</button>
            </div>
        )
    }
};

export default Callback;
