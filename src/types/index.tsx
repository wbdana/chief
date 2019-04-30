export interface IAuthState {
    username: string;
    profilePictureUrl: string;
}

export interface IStoreState {
    auth: IAuthState;
}
