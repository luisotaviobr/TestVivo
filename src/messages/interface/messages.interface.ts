import { from } from "rxjs";
import { Document } from 'mongoose';

export interface IMessages extends Document {
    readonly id: string;
    readonly conversationId: string;
    readonly timestamp: string;
    readonly from: string;
    readonly to: string;
    readonly text: string;
} 