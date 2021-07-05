const itemData = {
  text: 'text',
  date: '1',
  verifiedPurchase: true,
  show: false,
  rate: 3,
  replyCommentsCount: 5
};

const data = {
  ...itemData,
  user: { firstName: 'user', email: 'test@gmail.com', _id: '111', role: 'user' },
  replyComments: {
    count: 2,
    items: [
      {
        replyText: 'text',
        createdAt: '1',
        verifiedPurchase: false,
        showReplyComment: false,
        _id: '1'
      },
      {
        replyText: 'text2',
        createdAt: '1',
        verifiedPurchase: true,
        showReplyComment: true,
        _id: '2'
      }
    ]
  }
};

const dataWithOupReply = {
  ...itemData,
  user: { firstName: 'user', email: 'test@gmail.com', _id: '111', role: 'user' }
};

const dataWithOutUser = {
  ...itemData,
  verifiedPurchase: false,
  replyCommentsCount: 0
};
const commentId = '111222';

module.exports = {
  data,
  commentId,
  dataWithOupReply,
  dataWithOutUser
};
