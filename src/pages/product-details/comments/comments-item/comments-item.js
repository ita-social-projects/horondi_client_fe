import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import BeenhereOutlinedIcon from '@material-ui/icons/BeenhereOutlined';
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import { Button, Tooltip } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useStyles } from './comments-item.styles';
import LimitButton from '../limit-button/limit-button';
import CommentDialog from './comment-dialog';
import {
  COMMENTS_TIME_OPTIONS,
  DATE_LANGUAGE_OPTIONS,
  commentsReplyLimit
} from '../../../../configs';
import { setReplyCommentsLimit } from '../../../../redux/comments/comments.actions';
import { TOOLTIPS, REPLY } from '../../../../translations/product-details.translations';
import ReplyForm from './reply-form';
import ReplyCommentsItem from './reply-comments-item';
import {
  handleReplyCommentsLength,
  handleCommentsLimit,
  handleUserCommentOwner
} from '../../../../utils/handle-comments';

const CommentsItem = ({ data, commentId }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { email: userEmail, userName, user, text, date, show, rate, replyComments } = data;

  const { language, userData, orders, currentLimit } = useSelector(
    ({ Comments, Language, User, Products }) => ({
      language: Language.language,
      userData: User.userData,
      orders: Products.product.orders,
      currentLimit: Comments.replyLimit
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

  const commentsReplyLength = handleReplyCommentsLength(replyComments, email);

  const replyCommentsList = replyComments
    ? replyComments
      .slice(0, currentLimit)
      .map(({ _id, ...rest }) => <ReplyCommentsItem key={_id} data={rest} replyCommentId={_id} />)
    : [];

  const limitOption =
    replyCommentsList.length === replyComments?.length && replyComments.length > commentsReplyLimit;

  const handleReplyCommentsReload = () => {
    const newLimit = handleCommentsLimit(limitOption, commentsReplyLimit, currentLimit);
    dispatch(setReplyCommentsLimit(newLimit));
  };

  return (
    <div className={styles.container}>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.userContainer}>
            <div>
              {orders.some((el) => el.user.email === email) ? (
                <Tooltip title={TOOLTIPS[language].bought}>
                  <BeenhereOutlinedIcon className={styles.boughtIcon} />
                </Tooltip>
              ) : (
                ''
              )}
            </div>
            <div className={styles.user}>
              <span className={styles.name}>{firstName}</span>
            </div>
          </div>
          <div className={styles.userIcons}>
            <div className={styles.date}>{commentDate}</div>
            {handleUserCommentOwner(userData, email) ? (
              <div className={styles.icons}>
                <div className={styles.commentActions}>
                  <Tooltip title={TOOLTIPS[language].feedbackComment}>
                    <FeedbackOutlinedIcon />
                  </Tooltip>
                  <Tooltip title={TOOLTIPS[language].delete}>
                    <DeleteForeverIcon className={styles.deleteIcon} onClick={handleOpen} />
                  </Tooltip>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        {rate > 0 ? <Rating data-cy='rate' name='edit-rate' value={rate} disabled /> : null}
        <div className={styles.text}>{text}</div>
        <Tooltip title={userData ? '' : TOOLTIPS[language].unregisteredReply}>
          <div className={styles.reply}>
            <ReplyOutlinedIcon className={styles.replyIcon} />
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
        {commentsReplyLength > commentsReplyLimit && (
          <LimitButton
            onClick={handleReplyCommentsReload}
            startIcon={limitOption ? <VisibilityOffIcon /> : <GetAppIcon />}
          >
            {limitOption ? REPLY[language].hideBtn : REPLY[language].loadMore}
          </LimitButton>
        )}
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
