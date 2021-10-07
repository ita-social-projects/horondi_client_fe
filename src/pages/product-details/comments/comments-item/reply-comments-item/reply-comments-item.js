import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined';
import { Tooltip } from '@material-ui/core';
import CommentDialog from '../comment-dialog';
import { useStyles } from './reply-comments-item.styles';
import {
  COMMENTS_TIME_OPTIONS,
  DATE_LANGUAGE_OPTIONS,
  COMMENT_OWNER_STATUS
} from '../../../../../configs';

import {
  handleUserCommentOwner,
  handleUserCommentApprove
} from '../../../../../utils/handle-comments';

const ReplyCommentsItem = ({ data, replyCommentId }) => {
  const {
    answerer: user,
    replyText: text,
    createdAt: date,
    showReplyComment: show,
    verifiedPurchase
  } = data;

  const { t } = useTranslation();

  const { language, userData } = useSelector(({ Language, User, Products }) => ({
    language: Language.language,
    userData: User.userData
  }));
  const styles = useStyles();
  const { firstName, email, _id, role } = user || {
    firstName: t('replyCommentsItem.userData.firstName'),
    email: t('replyCommentsItem.userData.email'),
    _id: t('replyCommentsItem.userData._id'),
    role: t('replyCommentsItem.userData.role')
  };

  const [isModalShown, toggleModal] = useState(false);

  const dateLanguage = DATE_LANGUAGE_OPTIONS[language];
  const dateToShow = new Date(date);
  const commentDate = dateToShow.toLocaleString(dateLanguage, COMMENTS_TIME_OPTIONS);

  const handleOpen = () => {
    toggleModal(true);
  };

  const handleClose = () => {
    toggleModal(false);
  };

  if (!show && userData?._id !== _id) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.userContainer}>
            <div className={styles.user}>
              <span className={styles.name}>
                {role === 'admin' || role === 'superadmin'
                  ? `${COMMENT_OWNER_STATUS.isAdmin[language]} ${firstName}`
                  : firstName}
              </span>
            </div>
            <div className={styles.commentActions}>
              {verifiedPurchase ? (
                <div className={styles.checkIcon}>
                  <Tooltip title={t('replyCommentsItem.tooltips.bought')}>
                    <ShoppingCartRoundedIcon className={styles.boughtIcon} />
                  </Tooltip>
                </div>
              ) : (
                ''
              )}
              {handleUserCommentApprove(userData, email, show) ? (
                <Tooltip title={t('replyCommentsItem.tooltips.feedbackReply')}>
                  <FeedbackOutlinedIcon className={styles.icon} />
                </Tooltip>
              ) : null}
            </div>
          </div>
          <div className={styles.date}>{commentDate}</div>
        </div>
        <div className={styles.textContent}>
          <div className={show ? styles.text : `${styles.notAproveText} ${styles.text}`}>
            {text}
          </div>
          <div className={styles.userIcons}>
            {handleUserCommentOwner(userData, email) ? (
              <div className={styles.icons}>
                <Tooltip title={t('replyCommentsItem.tooltips.delete')}>
                  <DeleteOutlineOutlinedIcon className={styles.deleteIcon} onClick={handleOpen} />
                </Tooltip>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <CommentDialog
        handleClose={handleClose}
        isModalShown={isModalShown}
        commentId={replyCommentId}
        userId={userData ? userData._id : ''}
      />
    </div>
  );
};

export default ReplyCommentsItem;
