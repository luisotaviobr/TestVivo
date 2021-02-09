import { from } from "rxjs";
import { Document } from 'mongoose';

export interface IBot extends Document {
    readonly id: string;
    readonly name: string;
} 