import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import { useStyles } from './reply-form.styles';
import useCommentValidation from '../../../../../hooks/use-comment-validation';

import { commentFields, formRegExp, TEXT_VALUE } from '../../../../../configs';
import { addReply } from '../../../../../redux/comments/comments.actions';

const ReplyForm = ({ cancel, commentId }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const styles = useStyles();
  const { userData, productId } = useSelector(({ Language, User, Products }) => ({
    language: Language.language,
    userData: User.userData,
    productId: Products.productToSend._id
  }));

  const { _id } = userData;

  const onSubmit = ({ text: fieldText }) => {
    dispatch(
      addReply({
        id: _id,
        answerer: _id,
        replyText: fieldText,
        commentId,
        productId
      })
    );
    setShouldValidate(false);
    cancel(false);
  };

  const { values, errors, handleSubmit, handleBlur, setFieldValue, setShouldValidate } =
    useCommentValidation(!!userData, onSubmit);

  const handleCommentChange = (e) => {
    const value = e.target.value.replace(formRegExp.link, '');
    setFieldValue(TEXT_VALUE, value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.form}>
        <TextField
          multiline
          rows={commentFields.text.rows}
          value={values.text}
          variant='outlined'
          onChange={handleCommentChange}
          onBlur={handleBlur}
          error={!!errors.text}
          helperText={errors.text || ''}
          name={TEXT_VALUE}
          className={styles.input}
          label={t('replyForm.reply.text')}
        />
        <div className={styles.btnContainer}>
          <Button type='submit' onClick={() => setShouldValidate(true)} className={styles.replyBtn}>
            {t('replyForm.pdpButtons.leaveReply')}
          </Button>
          <Button onClick={cancel} className={styles.replyBtn}>
            {t('replyForm.pdpButtons.cancelButton')}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ReplyForm;
