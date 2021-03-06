export interface IAuthState {
    username: string;
    profilePictureUrl: string;
    reposUrl: string;
    accessToken: string;
}

export interface IStoreState {
    auth: IAuthState;
    router: any;
}
