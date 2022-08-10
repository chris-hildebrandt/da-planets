import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { galaxiesService } from "../services/GalaxiesService.js"

export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getGalaxies)
      .get('/:galaxyId', this.getGalaxyById)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createGalaxy)
      .delete('/:galaxyId', this.deleteGalaxy)
  }

  async getGalaxies(req, res, next) {
    try {
      let galaxies = await galaxiesService.getGalaxies()
      res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async getGalaxyById(req, res, next) {
    try {
      let galaxy = await galaxiesService.getGalaxyById(req.params.galaxyId)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async createGalaxy(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorId = req.userInfo.id
      let galaxy = await galaxiesService.createGalaxy(req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async deleteGalaxy(req, res, next) {
    try {
      let galaxy = await galaxiesService.deleteGalaxy(req.params.galaxyId)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}
