import * as React from 'react';

export interface IProps {
    // username: string;
    auth: {
        username: string;
        profilePictureUrl: string;
    }
}

export interface IState {

}

// function Home(props: IProps) {
class Home extends React.Component<IProps, IState> {
    // console.log("Home props:", props);
    // const { username, profilePictureUrl } = props.auth;
    componentDidMount() {
        this.getUserRepos();
    }

    getUserRepos = () => {
        const options = {
            method: "GET",

        }
        console.log(options);
        return null;
    }

    render() {
        const { username, profilePictureUrl } = this.props.auth;
        return (
            <div className="home">
                <p>Welcome, {username}</p>
                <img src={profilePictureUrl} alt=""/>
            </div>
        );
    }
}

export default Home;
