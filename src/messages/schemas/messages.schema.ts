import * as mongoose from 'mongoose';

export const MessagesSchema = new mongoose.Schema({
  id: String,
  conversationId: String,
  timestamp:String,
  from:String,
  to:String,
  text:String,
});
