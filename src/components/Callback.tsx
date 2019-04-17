import * as React from 'react';

export interface IProps {

}

interface IState {

}

class Callback extends React.Component<IProps, IState> {

    componentDidMount() {
        console.log('callback! code is:' + window.location.href);
    }

    render() {
        return (
            <div>
                {window.location.href}
            </div>
        )
    }
};

export default Callback;
