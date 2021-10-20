import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import { useStyles } from './comment-dialog.styles';

import { deleteComment, deleteReplyComment } from '../../../../../redux/comments/comments.actions';

const CommentDialog = ({
  isModalShown,
  handleClose,
  commentId,
  userId,
  isDeleteComment = 0,
  productId
}) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
        <DialogTitle className={styles.title}>
          {isDeleteComment === 1 ? t('common.dialog.title') : t('common.dialogRiply.title')}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {isDeleteComment === 1
              ? t('common.dialog.description')
              : t('common.dialogRiply.description')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={styles.button}>
            {t('product.pdpButtons.cancelButton')}
          </Button>
          <Button onClick={handleDelete} className={styles.button}>
            {t('product.pdpButtons.submitButton')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CommentDialog;
