import { config } from '../configs';
import ClientService from './ClientService';

const { serverUrl } = config.app;

class RatingService extends ClientService {
  updateRate = (id, userId, rate) =>
    this.putData(`${serverUrl}rating/${id}`, { userId, rate });
}

const ratingService = new RatingService();
export default ratingService;
