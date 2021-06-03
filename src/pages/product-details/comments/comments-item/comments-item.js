import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import BeenhereOutlinedIcon from '@material-ui/icons/BeenhereOutlined';
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import { Button, Tooltip } from '@material-ui/core';
import { useStyles } from './comments-item.styles';
import { Loader } from '../../../../components/loader/loader';
// import EditableField from './editable-field';
import CommentDialog from './comment-dialog';
import { COMMENTS_TIME_OPTIONS, DATE_LANGUAGE_OPTIONS, IMG_URL } from '../../../../configs';
import { TOOLTIPS, REPLY } from '../../../../translations/product-details.translations';
import ReplyForm from './reply-form';
import ReplyCommentsItem from './reply-comments-item';

const CommentsItem = ({ data, commentId }) => {
  const styles = useStyles();
  const { email: userEmail, userName, user, text, date, show, rate, replyComments } = data;

  const { updatingComment, language, userData, orders } = useSelector(
    ({ Comments, Language, User, Products }) => ({
      updatingComment: Comments.updatingComment,
      language: Language.language,
      userData: User.userData,
      orders: Products.product.orders
    })
  );

  const { firstName, email } = user || { firstName: userName, email: userEmail };

  const [isModalShown, toggleModal] = useState(false);
  const [isReplyShown, toggleReply] = useState(false);

  const dateLanguage = DATE_LANGUAGE_OPTIONS[language];
  const dateToShow = new Date(date);
  const commentDate = dateToShow.toLocaleString(dateLanguage, COMMENTS_TIME_OPTIONS);

  const handleOpen = () => {
    toggleModal(true);
  };

  const handleClose = () => {
    toggleModal(false);
  };

  const handleReplyOpen = () => {
    toggleReply(true);
  };

  const handleReplyClose = () => {
    toggleReply(false);
  };
  if (!show && userData?.email !== email) {
    return null;
  }

  if (updatingComment === commentId) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }
  const replyCommentsList = replyComments
    ? replyComments.map(({ _id, ...rest }) => (
      <ReplyCommentsItem key={_id} data={rest} replyCommentId={_id} />
    ))
    : [];

  return (
    <div className={styles.container}>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div>
            <div>
              {orders.some((el) => el.user.email === email) ? <BeenhereOutlinedIcon /> : ''}
            </div>
            <div className={styles.user}>
              <span className={styles.name}>{firstName}</span>
            </div>
          </div>
          <div className={styles.date}>{commentDate}</div>
          <div className={styles.icons}>
            <div className={styles.commentActions}>
              {(userData ? userData.email === email : false) ? (
                <div>
                  <Tooltip title={TOOLTIPS[language].delete}>
                    <DeleteForeverIcon className={styles.deleteIcon} onClick={handleOpen} />
                  </Tooltip>
                  <FeedbackOutlinedIcon />
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <Rating data-cy='rate' name='edit-rate' value={rate} disabled />
        <div className={styles.text}>{text}</div>
        <Tooltip title={userData ? '' : TOOLTIPS[language].unregisteredReply}>
          <div>
            <ReplyOutlinedIcon />
            <Button
              type='submit'
              className={styles.button}
              onClick={handleReplyOpen}
              disabled={!userData}
            >
              {REPLY[language].submit}
            </Button>
          </div>
        </Tooltip>
        {isReplyShown ? <ReplyForm cancel={handleReplyClose} commentId={commentId} /> : null}
        {replyCommentsList}
      </div>
      <CommentDialog
        handleClose={handleClose}
        isModalShown={isModalShown}
        commentId={commentId}
        userId={userData ? userData._id : ''}
        isDeleteComment={1}
      />
    </div>
  );
};

export default CommentsItem;
