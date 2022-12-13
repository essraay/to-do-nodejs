import { Schema, model } from 'mongoose'

const schema = new Schema(
  {
    fullName: String,
    mail: String,
    telephone: String,
    password: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('user', schema)
