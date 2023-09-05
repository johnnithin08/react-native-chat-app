interface IUser {
    id: string;
    name: string;
    imageUri?: string;
}

interface IMessage {
    id: string;
    content: string;
    createdAt: string;
    user?: IUser;
}

interface IChatList {
    id: string;
    users: IUser[];
    lastMessage: IMessage;
    newMessages?: number;
}