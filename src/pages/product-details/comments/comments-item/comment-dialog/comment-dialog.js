import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import { useMutation } from '@apollo/client';
import { useStyles } from './comment-dialog.styles';
import { deleteCommentMutation } from '../../operations/comments.queries';
import errorOrLoadingHandler from '../../../../../utils/errorOrLoadingHandler';

const CommentDialog = ({
  isModalShown,
  handleClose,
  commentId,
  userId,
  isDeleteComment = 0,
  productId,
  refetchComments
}) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const [deleteComment, { loading: deleteCommentLoading }] = useMutation(deleteCommentMutation, {
    onError: (err) => errorOrLoadingHandler(err)
  });

  const handleDelete = async () => {
    await deleteComment({ variables: { comment: commentId, id: userId } });
    await refetchComments();
    handleClose();
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
