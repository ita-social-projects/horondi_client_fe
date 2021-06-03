import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button } from '@material-ui/core';

import useCommentValidation from '../../../../../hooks/use-comment-validation';

import { commentFields, formRegExp, TEXT_VALUE } from '../../../../../configs';
import { addReply } from '../../../../../redux/comments/comments.actions';

import { PDP_BUTTONS } from '../../../../../translations/product-details.translations';

const ReplyForm = ({ cancel, commentId, firstName }) => {
  const dispatch = useDispatch();

  const { language, product, userData } = useSelector(({ Products, Language, User }) => ({
    product: Products.product._id,
    language: Language.language,
    userData: User.userData
  }));

  const { email, _id } = userData;

  const onSubmit = ({ text: fieldText }) => {
    dispatch(
      addReply({
        id: _id,
        answerer: _id,
        replyText: fieldText,
        commentId
      })
    );
    setShouldValidate(false);
    cancel(false);
  };

  const {
    values,
    errors,
    handleSubmit,
    handleBlur,
    setFieldValue,
    setShouldValidate
  } = useCommentValidation(!!userData, onSubmit);

  const handleCommentChange = (e) => {
    const value = e.target.value.replace(formRegExp.link, '');
    setFieldValue(TEXT_VALUE, value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        multiline
        rows={commentFields.text.rows}
        value={values.text}
        // className={styles.editableText}
        variant='outlined'
        onChange={handleCommentChange}
        onBlur={handleBlur}
        error={!!errors.text}
        helperText={errors.text || ''}
        name={TEXT_VALUE}
      />
      <div>
        <Button onClick={cancel}>{PDP_BUTTONS[language].cancelButton}</Button>
        <Button type='submit' onClick={() => setShouldValidate(true)}>
          {PDP_BUTTONS[language].submitButton}
        </Button>
      </div>
    </form>
  );
};

export default ReplyForm;
