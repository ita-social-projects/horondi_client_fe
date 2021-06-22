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
import { COMMENTS_TIME_OPTIONS, DATE_LANGUAGE_OPTIONS } from '../../../../configs';
import { getReplyComments } from '../../../../redux/comments/comments.actions';
import { TOOLTIPS, REPLY } from '../../../../translations/product-details.translations';
import ReplyForm from './reply-form';
import ReplyCommentsItem from './reply-comments-item';
import { Loader } from '../../../../components/loader/loader';
import { handleUserCommentOwner } from '../../../../utils/handle-comments';

const CommentsItem = ({ data, commentId }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { user, text, date, show, rate, replyCommentsCount, isSelled, replyComments } = data;

  const {
    language,
    userData,
    currentLimit,
    replyLoading,
    replyLoadingId,
    getReplyLoading,
    getReplyLoadingId
  } = useSelector(({ Comments, Language, User }) => ({
    language: Language.language,
    userData: User.userData,
    currentLimit: Comments.replyLimit,
    replyLoading: Comments.replyLoading.loader,
    replyLoadingId: Comments.replyLoading.commentId,
    getReplyLoading: Comments.getReplyLoading.loader,
    getReplyLoadingId: Comments.getReplyLoading.commentId
  }));

  const { firstName, email, _id: id } = user || {
    firstName: 'Deleted User',
    email: 'Deleted Email',
    _id: 'deleted'
  };

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

  const getReplyCommentsByComment = () => {
    dispatch(
      getReplyComments({ commentId, limit: currentLimit, skip: replyComments?.items?.length || 0 })
    );
  };

  if (!show && userData?._id !== id) {
    return null;
  }

  const commentsReplyLength = replyComments?.items.length;

  const replyCommentsList = replyComments?.items
    ? replyComments.items.map(({ _id, ...rest }) => (
      <ReplyCommentsItem key={_id} data={rest} replyCommentId={_id} />
    ))
    : [];

  const limitOption =
    replyCommentsList.length === replyComments?.items?.length &&
    replyComments?.items?.length > replyCommentsCount;

  return (
    <div className={styles.container}>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.userContainer}>
            <div>
              {isSelled ? (
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
            {replyLoading && replyLoadingId === commentId && (
              <div className={styles.loader}>
                <Loader width={40} height={40} heightWrap={90} />
              </div>
            )}
          </div>
        </Tooltip>

        {isReplyShown ? <ReplyForm cancel={handleReplyClose} commentId={commentId} /> : null}
        <Button type='submit' className={styles.button} onClick={getReplyCommentsByComment}>
          {replyCommentsCount}
        </Button>
        {replyCommentsList}
        {getReplyLoading && getReplyLoadingId === commentId && (
          <div className={styles.loader}>
            <Loader width={40} height={40} heightWrap={90} />
          </div>
        )}
        {commentsReplyLength < replyCommentsCount && (
          <LimitButton
            onClick={getReplyCommentsByComment}
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
