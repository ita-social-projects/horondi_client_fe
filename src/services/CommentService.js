import axios from 'axios';
import ClientService from './ClientService';
import { config } from '../configs';

const { serverUrl } = config.app;

class CommentService extends ClientService {
  getAllComments = async () => {
    const comments = await this.getResource('comments');
    return comments;
  };

  getCommentsByProductId = async (productId) => {
    const comments = await this.getResource(`comments?productId=${productId}`);
    return comments;
  };

  postComments = async (comment) => {
    const res = await this.postData('comments', comment);
    return res;
  };

  deleteComment = (id, token) =>
    this.deleteResource(`${serverUrl}comments/${id}`);
}
const commentService = new CommentService();
export default commentService;
