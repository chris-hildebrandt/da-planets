import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";



export class StarsController extends BaseController{
  constructor(){
    super('api/stars')
    this.router
    .get('', this.getStars)
    .get('/:starId', this.getStarById)
    // .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.createStar)
    .delete('/:starId', this.deleteStar)
  }
  getStarsByGalaxyId(arg0, getStars) {
    throw new Error("Method not implemented.");
  }
  getStarById(arg0, getStarById) {
    throw new Error("Method not implemented.");
  }
  createStar(arg0, createStar) {
    throw new Error("Method not implemented.");
  }
  deleteStar(arg0, deleteStar) {
    throw new Error("Method not implemented.");
  }
}