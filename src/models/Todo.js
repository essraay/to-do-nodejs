import { Schema, model } from 'mongoose'

const schema = new Schema(
  {
    title: String,
    isCompleted: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('todo', schema)
