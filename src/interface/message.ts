import { User } from "./user";
  
  interface Message {
    id: string;
    created_at: number;
    user: User;
    message: string;
    is_new: boolean;
  }

  
  export interface messageResponse {
    response: Message[];
  }
  