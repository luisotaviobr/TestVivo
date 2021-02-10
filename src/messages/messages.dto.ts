import { Timestamp } from "rxjs";


export class MessagesDto{
    id: string;
    conversationId: string;
    timestamp: string;
    from: string;
    to: string;
    text: string;
    
}