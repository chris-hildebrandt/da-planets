import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const GalaxiesSchema = new Schema(
  {
    name: { type: String, required: true, minlength: 3, maxlength:100},
    description: { type: String, maxlength: 100},
    creatorId: { type: ObjectId, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

// GalaxySchema.virtual('creator', {
//   localField: 'creatorId',
//   foreignField: '_id',
//   justOne: true,
//   ref: 'Profile'
// })