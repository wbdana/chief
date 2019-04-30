import Callback from '../components/Callback';
import * as actions from '../actions/auth';
import { IUserState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps({ username }: IUserState) {
    return {
        username: username,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.AuthAction>) {
    return {
        setUsername: (payload: string) => dispatch(actions.setUsername(payload)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Callback);