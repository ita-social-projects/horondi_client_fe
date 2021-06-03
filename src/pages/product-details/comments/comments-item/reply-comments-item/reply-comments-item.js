import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import BeenhereOutlinedIcon from '@material-ui/icons/BeenhereOutlined';
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import { Button, Tooltip } from '@material-ui/core';
import { Loader } from '../../../../../components/loader/loader';
import CommentDialog from '../comment-dialog';

import { COMMENTS_TIME_OPTIONS, DATE_LANGUAGE_OPTIONS, IMG_URL } from '../../../../../configs';
import { TOOLTIPS, REPLY } from '../../../../../translations/product-details.translations';

const ReplyCommentsItem = ({ data, replyCommentId }) => {
  const { answerer: user, replyText: text, createdAt: date, showReplyComment: show } = data;
  console.log(replyCommentId);
  const { updatingComment, language, userData, orders } = useSelector(
    ({ Comments, Language, User, Products }) => ({
      updatingComment: Comments.updatingComment,
      language: Language.language,
      userData: User.userData,
      orders: Products.product.orders
    })
  );

  const { firstName, email } = user;

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

  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              {orders.some((el) => el.user.email === email) ? <BeenhereOutlinedIcon /> : ''}
            </div>
            <div>
              <span>{firstName}</span>
            </div>
          </div>
          <div>{commentDate}</div>
          <div>
            <div>
              {(userData ? userData.email === email : false) ? (
                <div>
                  <Tooltip title={TOOLTIPS[language].delete}>
                    <DeleteForeverIcon onClick={handleOpen} />
                  </Tooltip>
                  <FeedbackOutlinedIcon />
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div>{text}</div>
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
