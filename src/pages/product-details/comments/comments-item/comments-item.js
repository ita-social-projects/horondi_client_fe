import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import { Tooltip } from '@material-ui/core';
import { useStyles } from './comments-item.styles';
import CommentDialog from './comment-dialog';
import { COMMENTS_TIME_OPTIONS, DATE_LANGUAGE_OPTIONS } from '../../../../configs';
import { getReplyComments } from '../../../../redux/comments/comments.actions';
import { TOOLTIPS, REPLY } from '../../../../translations/product-details.translations';
import ReplyForm from './reply-form';
import ReplyCommentsItem from './reply-comments-item';
import { Loader } from '../../../../components/loader/loader';
import {
  handleUserCommentOwner,
  handleTitleSubmit,
  handleArrowIcon,
  handleUserCommentApprove
} from '../../../../utils/handle-comments';

const CommentsItem = ({ data, commentId }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const {
    user,
    text,
    date,
    show,
    rate,
    replyCommentsCount,
    verifiedPurchase,
    replyComments
  } = data;

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
  const [isReplyListShown, toggleReplyList] = useState(false);

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

  const showReplyList = () => {
    if (isReplyListShown) {
      return toggleReplyList(false);
    }
    toggleReplyList(true);
    return !commentsReplyLength ? getReplyCommentsByComment() : null;
  };

  const getReplyCommentsByComment = () => {
    dispatch(
      getReplyComments({ commentId, limit: currentLimit, skip: replyComments?.items?.length || 0 })
    );
  };

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
            <div className={styles.user}>
              <span className={styles.name}>{firstName}</span>
            </div>
            <div className={styles.commentActions}>
              {verifiedPurchase ? (
                <div className={styles.checkIcon}>
                  <Tooltip title={TOOLTIPS[language].bought}>
                    <ShoppingCartRoundedIcon className={styles.boughtIcon} />
                  </Tooltip>
                </div>
              ) : null}
              {handleUserCommentApprove(userData, email, show) ? (
                <Tooltip title={TOOLTIPS[language].feedbackComment}>
                  <FeedbackOutlinedIcon className={styles.icon} />
                </Tooltip>
              ) : null}
            </div>
          </div>
          <div className={styles.date}>{commentDate}</div>
        </div>
        {rate > 0 ? <Rating data-cy='rate' name='edit-rate' value={rate} disabled /> : null}
        <div className={styles.textContent}>
          <div className={show ? styles.text : `${styles.notAproveText} ${styles.text}`}>
            {text}
          </div>
          <div className={styles.userIcons}>
            {handleUserCommentOwner(userData, email) ? (
              <div className={styles.icons}>
                <Tooltip title={TOOLTIPS[language].delete}>
                  <DeleteOutlineOutlinedIcon className={styles.deleteIcon} onClick={handleOpen} />
                </Tooltip>
              </div>
            ) : null}
          </div>
        </div>

        <div className={styles.reply}>
          <ReplyOutlinedIcon className={styles.replyIcon} />
          <Tooltip title={handleTitleSubmit(userData, language, 'unregisteredReply')}>
            <p className={styles.button} onClick={handleReplyOpen}>
              {REPLY[language].submit}
            </p>
          </Tooltip>

          {replyCommentsCount > 0 ? (
            <div className={styles.replyCount} onClick={showReplyList}>
              <ChatBubbleOutlineOutlinedIcon className={styles.icon} />
              <span className={styles.replyText}>
                {REPLY[language].answers}
                {'\u00A0'}
                {replyCommentsCount}
              </span>
            </div>
          ) : null}
        </div>

        {isReplyListShown ? (
          <div>
            {replyCommentsList}

            {commentsReplyLength < replyCommentsCount && (
              <div className={styles.loadMore}>
                {handleArrowIcon(limitOption)}
                <span onClick={getReplyCommentsByComment}>
                  {limitOption ? REPLY[language].hideBtn : REPLY[language].loadMore}
                </span>
              </div>
            )}
          </div>
        ) : null}
        {isReplyShown && userData?._id ? (
          <ReplyForm cancel={handleReplyClose} commentId={commentId} />
        ) : null}
        {getReplyLoading && getReplyLoadingId === commentId && (
          <div className={styles.loader}>
            <Loader width={40} height={40} heightWrap={90} />
          </div>
        )}
        {replyLoading && replyLoadingId === commentId && (
          <div className={styles.loader}>
            <Loader width={40} height={40} heightWrap={90} />
          </div>
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
