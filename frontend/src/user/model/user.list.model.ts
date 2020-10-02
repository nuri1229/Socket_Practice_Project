export type User = {
    userId: string;
    useYn: string
    temp01?: any;
    userToken: string;
    tokenExpiredTime: string;
    createdTime: string;
    userPk: string;
}

export type ReceiveUserList = User[];
export type UserListState = ReceiveUserList;

