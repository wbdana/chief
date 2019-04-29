import * as React from 'react';

export interface IProps {
    username: string;
}

function Home(props: IProps) {
    const { username } = props;

    return (
        <div className="home">
            <p>Welcome, {username}</p>
        </div>
    );
}

export default Home;
