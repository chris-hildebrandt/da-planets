import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class GalaxiesService {
  async getGalaxies() {
    let galaxies = await dbContext.Galaxies.find()
    return galaxies
  }
  async getGalaxyById(galaxyId) {
    let galaxy = await dbContext.Galaxies.findById(galaxyId)
    if (!galaxy){
      throw new BadRequest('invalid Galaxy Id')
    }
    return galaxy
  }
  async createGalaxy(body) {
    let galaxy = await dbContext.Galaxies.create(body)
    return galaxy
  }
  async deleteGalaxy(galaxyId) {
    let galaxy = await this.getGalaxyById(galaxyId)
    await galaxy.remove()
    return galaxy
  }

  // async find(query = {}) {
  //   const values = await dbContext.Values.find(query)
  //   return values
  // }

  // async findById(id) {
  //   const value = await dbContext.Values.findById(id)
  //   if (!value) {
  //     throw new BadRequest('Invalid Id')
  //   }
  //   return value
  // }
}

export const galaxiesService = new GalaxiesService()
