import Callback from '../components/Callback';
import * as actions from '../actions/auth';
// import { IAuthState } from '../types/index';
import { IStoreState } from '../types';
import { IProfileInfoPayload } from '../actions/auth';
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
        setUsername: (payload: string) => dispatch(actions.setUsername(payload)),
        setProfilePictureUrl: (payload: string) => dispatch(actions.setProfilePictureUrl(payload)),
        setAccessToken: (payload: string) => dispatch(actions.setAccessToken(payload)),
        setProfileInfo: (payload: IProfileInfoPayload) => dispatch(actions.setProfileInfo(payload)),
        // redirectHome: () => dispatch(actions.redirectHome()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Callback);