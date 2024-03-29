import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined';
import { Tooltip } from '@material-ui/core';
import CommentDialog from '../comment-dialog';
import { useStyles } from './reply-comments-item.styles';
import { COMMENTS_TIME_OPTIONS } from '../../../constants';
import VerifiedPurchaseIcon from '../../../../../images/verifiedPurchaseIcon';

import {
  handleUserCommentApprove,
  handleUserCommentOwner
} from '../../../../../utils/handle-comments';

const ReplyCommentsItem = ({ replyItem, replyCommentId, updateReplies }) => {
  const {
    answerer: user,
    replyText: text,
    createdAt: date,
    showReplyComment: show,
    verifiedPurchase
  } = replyItem;

  const { t, i18n } = useTranslation();

  const { userData } = useSelector(({ User }) => ({
    userData: User.userData
  }));
  const styles = useStyles();
  const { firstName, email, _id, role } = user || {
    firstName: t('common.userData.firstName'),
    email: t('common.userData.email'),
    _id: t('common.userData._id'),
    role: t('common.userData.role')
  };

  const [isModalShown, toggleModal] = useState(false);
  const dateLanguage = i18n.language === 'ua' ? 'ukr-UA' : 'en-US';
  const dateToShow = new Date(date);
  const commentDate = dateToShow.toLocaleString(dateLanguage, COMMENTS_TIME_OPTIONS);

  const handleOpen = () => {
    toggleModal(true);
  };

  const handleClose = () => {
    toggleModal(false);
  };

  useEffect(
    () => () => {
      toggleModal(false);
    },
    []
  );

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
                  ? `${t('common.reply.isAdmin')} ${firstName}`
                  : firstName}
              </span>
            </div>
            <div className={styles.commentActions}>
              {verifiedPurchase ? (
                <Tooltip className={styles.checkIcon} title={t('product.tooltips.bought')}>
                  <VerifiedPurchaseIcon alt='Verified purhase icon' className={styles.boughtIcon} />
                </Tooltip>
              ) : (
                ''
              )}
              {handleUserCommentApprove(userData, email, show) ? (
                <Tooltip title={t('product.tooltips.feedbackReply')}>
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
              <div className={styles.icons} data-testid='showModal'>
                <Tooltip title={t('product.tooltips.delete')}>
                  <DeleteIcon className={styles.deleteIcon} onClick={handleOpen} />
                </Tooltip>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <CommentDialog
        handleClose={handleClose}
        isModalShown={isModalShown}
        id={replyCommentId}
        refetchComments={updateReplies}
        userId={userData ? userData._id : ''}
      />
    </div>
  );
};

export default ReplyCommentsItem;
