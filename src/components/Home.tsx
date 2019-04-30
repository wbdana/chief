import * as React from 'react';

export interface IProps {
    // username: string;
    auth: {
        username: string;
        profilePictureUrl: string;
    }
}

function Home(props: IProps) {
    console.log("Home props:", props);
    const { username, profilePictureUrl } = props.auth;

    return (
        <div className="home">
            <p>Welcome, {username}</p>
            <img src={profilePictureUrl} alt=""/>
        </div>
    );
}

export default Home;
