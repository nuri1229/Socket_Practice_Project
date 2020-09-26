export type User = {
    userId: string;
    useYn: string
    temp01?: any;
    user_token: string;
    token_expired_time: string;
    created_time: string;
    userPk: string;
}

export type ReceiveUserList = User[];
export type UserListState = ReceiveUserList;

