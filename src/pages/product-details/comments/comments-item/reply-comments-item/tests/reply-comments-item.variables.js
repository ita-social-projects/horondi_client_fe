const data = { replyText: 'text', createdAt: '1', verifiedPurchase: true, showReplyComment: true };
const dataAdmin = {
  answerer: { firstName: 'user', email: 'test@gmail.com', _id: '111', role: 'admin' },
  ...data
};
const dataSecond = {
  answerer: null,
  replyText: 'text',
  createdAt: '1',
  showReplyComment: false
};
const dataUser = {
  answerer: { firstName: 'user', email: 'test@gmail.com', _id: '111', role: 'user' },
  showReplyComment: false,
  ...data
};
const dataSuperAdmin = {
  answerer: { firstName: 'user', email: 'test@gmail.com', _id: '111', role: 'superadmin' },
  ...data
};
const dataWithOutVerifing = {
  ...data,
  answerer: { firstName: 'user', email: 'test@gmail.com', _id: '111', role: 'user' },
  verifiedPurchase: false,
  showReplyComment: false
};
const replyCommentId = '1';

module.exports = {
  dataUser,
  replyCommentId,
  dataSecond,
  dataAdmin,
  dataSuperAdmin,
  dataWithOutVerifing
};
