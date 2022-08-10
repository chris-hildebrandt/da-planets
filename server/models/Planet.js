import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema(
  {
    name: { type: String, required: true, minlength: 3, maxlength:100},
    description: { type: String, maxlength: 100},
    creatorId: { type: ObjectId, ref: 'Profile', required: true },
    starId: { type: ObjectId, required: true, ref: 'Star'}
  },
  { timestamps: true, toJSON: { virtuals: true } }
)