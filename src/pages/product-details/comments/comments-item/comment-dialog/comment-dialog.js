import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import { useStyles } from './comment-dialog.styles';

import { deleteComment, deleteReplyComment } from '../../../../../redux/comments/comments.actions';
import { DIALOG, PDP_BUTTONS } from '../../../../../translations/product-details.translations';

const CommentDialog = ({ isModalShown, handleClose, commentId, userId, isDeleteComment = 0 }) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const { language, productId } = useSelector(({ Products, Language }) => ({
    productId: Products.product._id,
    language: Language.language
  }));

  const handleDelete = () => {
    if (isDeleteComment === 1) {
      dispatch(
        deleteComment({
          product: productId,
          comment: commentId,
          id: userId
        })
      );
      handleClose();
    } else {
      dispatch(
        deleteReplyComment({
          replyCommentId: commentId,
          id: userId
        })
      );
      handleClose();
    }
  };

  return (
    <div>
      <Dialog open={isModalShown} onClose={handleClose}>
        <DialogTitle className={styles.title}>{DIALOG[language].title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{DIALOG[language].description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={styles.button}>
            {PDP_BUTTONS[language].cancelButton}
          </Button>
          <Button onClick={handleDelete} className={styles.button}>
            {PDP_BUTTONS[language].submitButton}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CommentDialog;
