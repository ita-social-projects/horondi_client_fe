import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import { useMutation } from '@apollo/client';
import { useStyles } from './reply-form.styles';
import useCommentValidation from '../../../../../hooks/use-comment-validation';

import { commentFields, TEXT_VALUE } from '../../../../../configs';
import { ERROR } from '../../../constants';
import { formRegExp } from '../../../../../configs/regexp';
import { addReplyMutation } from '../../operations/comments.queries';
import errorOrLoadingHandler from '../../../../../utils/errorOrLoadingHandler';
import { Loader } from '../../../../../components/loader/loader';
import { SnackBarContext } from '../../../../../context/snackbar-context';

const ReplyForm = ({ user, cancel, commentId, refetchComments }) => {
  const { t } = useTranslation();

  const { setSnackBarMessage } = useContext(SnackBarContext);
  const styles = useStyles();
  const { userData, productId } = useSelector(({ User, Products }) => ({
    userData: User.userData,
    productId: Products.productToSend._id
  }));
  const { firstName } = user;

  const [addReply, { loading: addReplyLoading }] = useMutation(addReplyMutation, {
    onError: (err) => {
      errorOrLoadingHandler(err);
      setSnackBarMessage(t('errorPage.pageMessage.DEFAULT_ERROR'), ERROR);
    },
    onCompleted: () => setSnackBarMessage(t('product.snackBar.addedReply'))
  });

  const { _id } = userData;

  const onSubmit = async ({ text: fieldText }) => {
    await addReply({
      variables: {
        id: _id,
        answerer: _id,
        replyText: fieldText,
        commentId,
        productId
      }
    });
    await refetchComments();
    setShouldValidate(false);
    cancel(false);
  };

  const { values, errors, handleSubmit, handleBlur, setFieldValue, setShouldValidate } =
    useCommentValidation(!!userData, onSubmit);

  const handleCommentChange = (e) => {
    const value = e.target.value.replace(formRegExp.link, '');
    setFieldValue(TEXT_VALUE, value);
  };

  const d = new Date();
  const currentDate = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.form}>
        <div className={styles.formHeader}>
          <span>
            <span>Your name</span>
            <ReplyOutlinedIcon className={styles.replyIcon} />
            <span>{firstName}</span>
          </span>
          <span>{currentDate}</span>
        </div>
        <TextField
          multiline
          rows={commentFields.text.rows}
          value={values.text}
          variant='outlined'
          onChange={handleCommentChange}
          onBlur={handleBlur}
          error={!!errors.text}
          helperText={errors.text && t('error.text')}
          name={TEXT_VALUE}
          className={styles.input}
          label={t('common.reply.text')}
          data-testid='replyForm'
        />
        <div className={styles.btnContainer}>
          {addReplyLoading && (
            <div className={styles.loader}>
              <Loader width={20} height={20} heightWrap={90} />
            </div>
          )}
          <Button
            onClick={cancel}
            disabled={addReplyLoading}
            className={`${styles.replyBtn} ${styles.cancelBtn}`}
          >
            {t('product.pdpButtons.cancelButton')}
          </Button>
          <Button
            type='submit'
            onClick={() => setShouldValidate(true)}
            disabled={addReplyLoading}
            className={styles.replyBtn}
          >
            {t('product.pdpButtons.leaveReply')}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ReplyForm;
