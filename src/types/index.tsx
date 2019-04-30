export interface IAuthState {
    username: string;
}

export interface IStoreState {
    languageName: string;
    enthusiasmLevel: number;
    auth: IAuthState;
}
