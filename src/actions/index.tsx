// import * as constants from '../constants';
import * as authConstants from '../constants/auth';

// export interface IIncrementEnthusiasm {
//     type: constants.INCREMENT_ENTHUSIASM;
// }

// export interface IDecrementEnthusiasm {
//     type: constants.DECREMENT_ENTHUSIASM;
// }

export interface ISetUsername {
    type: authConstants.SET_USERNAME;
    payload: string;
}

// export type EnthusiasmAction = IIncrementEnthusiasm | IDecrementEnthusiasm;

export type AuthAction = ISetUsername;

// export function incrementEnthusiasm(): IIncrementEnthusiasm {
//     return {
//         type: constants.INCREMENT_ENTHUSIASM,
//     }
// }

// export function decrementEnthusiasm(): IDecrementEnthusiasm {
//     return {
//         type: constants.DECREMENT_ENTHUSIASM,
//     }
// }

export function setUsername(payload: string): ISetUsername {
    return {
        type: authConstants.SET_USERNAME,
        payload,
    }
}
