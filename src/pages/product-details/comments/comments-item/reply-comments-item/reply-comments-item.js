import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import BeenhereOutlinedIcon from '@material-ui/icons/BeenhereOutlined';
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined';
import { Tooltip } from '@material-ui/core';
import CommentDialog from '../comment-dialog';
import { useStyles } from './reply-comments-item.styles';
import { COMMENTS_TIME_OPTIONS, DATE_LANGUAGE_OPTIONS } from '../../../../../configs';
import { TOOLTIPS } from '../../../../../translations/product-details.translations';
import { handleUserCommentOwner } from '../../../../../utils/handle-comments';

const ReplyCommentsItem = ({ data, replyCommentId }) => {
  const { answerer: user, replyText: text, createdAt: date, showReplyComment: show } = data;

  const { language, userData, orders } = useSelector(({ Language, User, Products }) => ({
    language: Language.language,
    userData: User.userData,
    orders: Products.product.orders
  }));
  const styles = useStyles();
  const { firstName, email } = user;

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

  if (!show && userData?.email !== email) {
    return null;
  }

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
                  <Tooltip title={TOOLTIPS[language].feedbackReply}>
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
        <div className={styles.text}>{text}</div>
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
