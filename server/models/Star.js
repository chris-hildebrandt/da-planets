import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const StarSchema = new Schema(
  {
    name: { type: String, required: true, minlength: 3, maxlength:100},
    description: { type: String, maxlength: 100},
    galaxyId: { type: ObjectId, required: true, ref: 'Galaxy'}
  },
  { timestamps: true, toJSON: { virtuals: true } }
)