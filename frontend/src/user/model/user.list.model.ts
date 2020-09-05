export type User = {
    userId: string;
    useYn: string
    temp01: any;
    user_token: string;
    token_expired_time: Date;
    created_tiem: Date;
}

export type ReceiveUserList = User[];
export type UserListState = ReceiveUserList;