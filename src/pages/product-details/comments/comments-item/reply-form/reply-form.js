import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import { useMutation } from '@apollo/client';
import { useStyles } from './reply-form.styles';
import useCommentValidation from '../../../../../hooks/use-comment-validation';

import { commentFields, formRegExp, TEXT_VALUE } from '../../../../../configs';
import { addReplyMutation } from '../../operations/comments.queries';
import errorOrLoadingHandler from '../../../../../utils/errorOrLoadingHandler';
import { Loader } from '../../../../../components/loader/loader';

const ReplyForm = ({ cancel, commentId, refetch }) => {
  const { t } = useTranslation();

  const styles = useStyles();
  const { userData, productId } = useSelector(({ Language, User, Products }) => ({
    language: Language.language,
    userData: User.userData,
    productId: Products.productToSend._id
  }));
  const [addReply, { loading: addReplyLoading }] = useMutation(addReplyMutation, {
    onError: (err) => errorOrLoadingHandler(err)
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
    await refetch();
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
          label={t('common.reply.text')}
        />
        <div className={styles.btnContainer}>
          {addReplyLoading && (
            <div className={styles.loader}>
              <Loader width={20} height={20} heightWrap={90} />
            </div>
          )}
          <Button
            type='submit'
            onClick={() => setShouldValidate(true)}
            disabled={addReplyLoading}
            className={styles.replyBtn}
          >
            {t('product.pdpButtons.leaveReply')}
          </Button>
          <Button onClick={cancel} disabled={addReplyLoading} className={styles.replyBtn}>
            {t('product.pdpButtons.cancelButton')}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ReplyForm;
