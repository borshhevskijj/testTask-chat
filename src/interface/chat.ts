import {User} from './user'
interface LastMessage {
    created_at: number;
    user_id: string;
    user_name: string;
    user_surname: string;
    you: boolean;
    message: string;
}

interface Chat {
    id: string;
    title: string;
    private: boolean;
    count_unread: number;
    users: User[];
    created_at: number;
    last_message: LastMessage;
    avatar: string;
}

export interface ChatResponse {
    response: Chat[];   
}