import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const LifeFormSchema = new Schema(
  {
    name: { type: String, required: true, minlength: 3, maxlength: 100, },
    description: { type: String, minlength: 3, maxlength: 500 },
    edible: { type: Boolean, default: true },
    population: { type: Number, min: 0, max: 1000000000000000000 },
    
  },
  {
    timestamps: true, toJSON: { virtuals: true }
  }
)

