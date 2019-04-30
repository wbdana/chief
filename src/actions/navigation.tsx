import * as navigationConstants from '../constants/navigation';

export interface IRedirectHome {
    type: navigationConstants.REDIRECT_HOME;
}

export type NavigationAction = IRedirectHome;

export function redirectHome(): IRedirectHome {
    return {
        type: navigationConstants.REDIRECT_HOME,
    };
}
