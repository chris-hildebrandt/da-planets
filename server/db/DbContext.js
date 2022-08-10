import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { GalaxySchema } from '../models/Galaxy.js'

class DbContext {
  Galaxies = mongoose.model('Galaxy', GalaxySchema);
  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
