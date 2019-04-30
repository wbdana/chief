import Home from '../components/Home';
import * as actions from '../actions/auth';
import { IStoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps({ auth, router }: IStoreState) {
    return {
        auth: auth,
        router: router,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.AuthAction>) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
