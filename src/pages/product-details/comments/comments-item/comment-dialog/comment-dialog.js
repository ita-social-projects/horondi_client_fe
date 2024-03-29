import React, { useContext } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { useMutation } from '@apollo/client';
import { useStyles } from './comment-dialog.styles';
import errorOrLoadingHandler from '../../../../../utils/errorOrLoadingHandler';
import {
  deleteCommentMutation,
  deleteReplyForCommentMutation
} from '../../operations/comments.queries';
import Loader from '../../../../../components/loader';
import { ERROR } from '../../../constants';
import { SnackBarContext } from '../../../../../context/snackbar-context';

const CommentDialog = ({
  isModalShown,
  handleClose,
  id,
  isDeleteComment = false,
  userId,
  refetchComments
}) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const { setSnackBarMessage } = useContext(SnackBarContext);

  const [deleteComment, { loading: deleteCommentLoading }] = useMutation(deleteCommentMutation, {
    onError: (err) => {
      setSnackBarMessage(t('errorPage.pageMessage.DEFAULT_ERROR'), ERROR);
      errorOrLoadingHandler(err);
    },
    onCompleted: () => setSnackBarMessage(t('product.snackBar.deletedComment'))
  });

  const [deleteReplyForComment, { loading: deleteReplyForCommentLoading }] = useMutation(
    deleteReplyForCommentMutation,
    {
      onError: (err) => {
        setSnackBarMessage(t('errorPage.pageMessage.DEFAULT_ERROR'), ERROR);
        errorOrLoadingHandler(err);
      },
      onCompleted: () => setSnackBarMessage(t('product.snackBar.deletedReply'))
    }
  );

  const handleDelete = async () => {
    if (isDeleteComment) {
      await deleteComment({
        variables: {
          id: userId,
          commentID: id
        }
      });
    } else {
      await deleteReplyForComment({
        variables: {
          id: userId,
          replyCommentId: id
        }
      });
    }
    await refetchComments();
    handleClose();
  };

  return (
    <div className={styles.root} data-testid='modal'>
      <Dialog open={isModalShown} onClose={handleClose} className={styles.dialog}>
        <DialogTitle className={styles.title}>
          <div className={styles.titleContent}>
            {isDeleteComment ? t('common.dialog.title') : t('common.dialogRiply.title')}
            <CloseIcon className={styles.icon} onClick={handleClose} />
          </div>
        </DialogTitle>

        <DialogContent>
          <DialogContentText className={styles.content}>
            {isDeleteComment ? t('common.dialog.description') : t('common.dialogRiply.description')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {(deleteCommentLoading || deleteReplyForCommentLoading) && (
            <div className={styles.loader} data-testid='deleteCommentLoader'>
              <Loader width={20} height={20} heightWrap={40} />
            </div>
          )}
          <Button onClick={handleDelete} className={styles.button}>
            {t('product.pdpButtons.submitButton')}
          </Button>
          <Button onClick={handleClose} className={styles.button}>
            {t('product.pdpButtons.cancelButton')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CommentDialog;
