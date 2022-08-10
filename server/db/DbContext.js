import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { GalaxiesSchema } from '../models/Galaxy.js'

class DbContext {
  Galaxies = mongoose.model('Galaxy', GalaxiesSchema);
  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
