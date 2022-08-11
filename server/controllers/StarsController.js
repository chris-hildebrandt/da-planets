import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";



export class StarsController extends BaseController{
  constructor(){
    super('api/stars')
    this.router
    .get('', this.getStarsByGalaxyId)
    .get('/:starId', this.getStarById)
    // .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.createStar)
    .delete('/:starId', this.deleteStar)
  }
  getStarsByGalaxyId(req, res, next) {
    throw new Error("Method not implemented.");
  }
  getStarById(req, res, next) {
    throw new Error("Method not implemented.");
  }
  createStar(req, res, next) {
    throw new Error("Method not implemented.");
  }
  deleteStar(req, res, next) {
    throw new Error("Method not implemented.");
  }
}