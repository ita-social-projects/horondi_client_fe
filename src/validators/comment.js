import * as Yup from 'yup';

export const validationSchema = () =>
  Yup.object().shape({
    comment: Yup.string().min(2, 'common.reply.error').max(700, 'common.reply.error'),
    replyComment: Yup.string().min(2, 'common.reply.error').max(700, 'common.reply.error')
  });
