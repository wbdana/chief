import Callback from '../components/Callback';
import * as actions from '../actions/auth';
// import { IAuthState } from '../types/index';
import { IStoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// export function mapStateToProps({ username }: IAuthState) {
export function mapStateToProps({ auth }: IStoreState) {
    return {
        auth: auth,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.AuthAction>) {
    return {
        setUsername: (payload: string) => dispatch(actions.setUsername(payload)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Callback);