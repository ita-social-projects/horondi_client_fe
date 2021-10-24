import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import { Tooltip } from '@material-ui/core';
import { useStyles } from './comments-item.styles';
import CommentDialog from './comment-dialog';
import { COMMENTS_TIME_OPTIONS } from '../../../../configs';
import ReplyForm from './reply-form';
import ReplyCommentsItem from './reply-comments-item';
import {
  handleArrowIcon,
  handleRate,
  handleTextStyle,
  handleUserCommentApprove,
  handleUserCommentOwner,
  handleUserId
} from '../../../../utils/handle-comments';

const CommentsItem = ({ data, commentId, productId, refetchComments }) => {
  const styles = useStyles();

  const { user, text, date, show, rate, replyCommentsCount, verifiedPurchase, replyComments } =
    data;

  const { userData } = useSelector(({ User }) => ({
    userData: User.userData
  }));

  const { t, i18n } = useTranslation();

  const { firstName, email } = user || {
    firstName: t('common.userData.firstName'),
    email: t('common.userData.email')
  };

  const [isModalShown, toggleModal] = useState(false);
  const [isReplyShown, toggleReply] = useState(false);
  const [isReplyListShown, toggleReplyList] = useState(false);
  const [currentLimit, setCurrentLimit] = useState(10);
  const dateLanguage = i18n.language === 'ua' ? 'ukr-UA' : 'en-US';
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
    return !replyComments?.length;
  };

  const getReplyCommentsByComment = () => {
    setCurrentLimit((prev) => prev + 10);
  };

  const replyCommentsList = replyComments.map(
    ({ _id, ...rest }, index) =>
      index <= currentLimit && (
        <ReplyCommentsItem
          key={_id}
          data={rest}
          replyCommentId={_id}
          refetchComments={refetchComments}
        />
      )
  );

  const limitOption = replyCommentsList.length === replyComments.count;

  const loadMore = limitOption ? null : t('common.reply.loadMore');

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
                  <Tooltip title={t('product.tooltips.bought')}>
                    <ShoppingCartRoundedIcon className={styles.boughtIcon} />
                  </Tooltip>
                </div>
              ) : null}
              {handleUserCommentApprove(userData, email, show) ? (
                <Tooltip title={t('product.tooltips.feedbackComment')}>
                  <FeedbackOutlinedIcon className={styles.icon} />
                </Tooltip>
              ) : null}
            </div>
          </div>
          <div className={styles.date}>{commentDate}</div>
        </div>
        {handleRate(rate)}
        <div className={styles.textContent}>
          <div
            className={handleTextStyle(show, styles.text, `${styles.notAproveText} ${styles.text}`)}
          >
            {text}
          </div>
          <div className={styles.userIcons}>
            {handleUserCommentOwner(userData, email) ? (
              <div className={styles.icons}>
                <Tooltip title={t('product.tooltips.delete')}>
                  <DeleteOutlineOutlinedIcon className={styles.deleteIcon} onClick={handleOpen} />
                </Tooltip>
              </div>
            ) : null}
          </div>
        </div>

        <div className={styles.reply}>
          <ReplyOutlinedIcon className={styles.replyIcon} />
          <Tooltip title={userData ? '' : t(`product.tooltips.unregisteredReply`)}>
            <p className={styles.button} onClick={handleReplyOpen}>
              {t('common.reply.submit')}
            </p>
          </Tooltip>

          {replyCommentsCount ? (
            <div className={styles.replyCount} onClick={showReplyList}>
              <ChatBubbleOutlineOutlinedIcon className={styles.icon} />
              <span className={styles.replyText}>
                {t('common.reply.answers')}
                {'\u00A0'}
                {replyCommentsCount}
              </span>
            </div>
          ) : null}
        </div>

        {isReplyListShown ? (
          <div>
            {replyCommentsList}

            {replyComments.length > currentLimit && (
              <div className={styles.loadMore}>
                {handleArrowIcon(limitOption)}
                <span onClick={getReplyCommentsByComment} className={styles.loadMoreText}>
                  {loadMore}
                </span>
              </div>
            )}
          </div>
        ) : null}
        {isReplyShown && userData?._id && (
          <ReplyForm
            cancel={handleReplyClose}
            refetchComments={refetchComments}
            commentId={commentId}
          />
        )}
      </div>
      <CommentDialog
        handleClose={handleClose}
        isModalShown={isModalShown}
        commentId={commentId}
        userId={handleUserId(userData)}
        isDeleteComment={1}
        productId={productId}
        refetchComments={refetchComments}
      />
    </div>
  );
};

export default CommentsItem;
