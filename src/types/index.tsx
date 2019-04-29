export interface IUserState {
    username: string;
}

export interface IStoreState {
    languageName: string;
    enthusiasmLevel: number;
    user: IUserState;
}
