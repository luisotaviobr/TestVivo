import * as mongoose from 'mongoose';

export const BotSchema = new mongoose.Schema({
  id: String,
  name: String,
});
