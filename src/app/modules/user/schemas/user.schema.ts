import * as mongoose from 'mongoose'

export const CatSchema = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  avatar: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
})
