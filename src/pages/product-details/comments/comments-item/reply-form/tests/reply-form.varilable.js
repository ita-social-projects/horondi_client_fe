import { addReplyMutation } from '../../../operations/comments.queries';

export const mockRequest = [
  {
    request: {
      query: addReplyMutation,
      variables: {
        id: '1234123321',
        answerer: '212121321313',
        replyText: 'asddsadsadsa',
        commentId: '123321213213123',
        productId: '21321332112313'
      }
    }
  }
];
