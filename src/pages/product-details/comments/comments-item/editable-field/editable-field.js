import React from 'react';
import useCommentValidation from '../../../../../hooks/use-comment-validation';
import { useDispatch, useSelector } from 'react-redux';

import { TextField, Tooltip, Button } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import useStyles from './editable-field.styles';

import { commentFields, formRegExp, TEXT } from '../../../../../configs';
import { updateComment } from '../../../../../redux/comments/comments.actions';

import {
  TOOLTIPS,
  PDP_BUTTONS
} from '../../../../../translations/product-details.translations';

const EditableField = ({
  setEditable,
  text,
  handleOpen,
  commentId,
  firstName
}) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const { language, product, userData } = useSelector(
    ({ Products, Language, User }) => ({
      product: Products.product._id,
      language: Language.language,
      userData: User.userData
    })
  );

  const { email, images } = userData;

  const onSubmit = ({ text }) => {
    dispatch(
      updateComment({
        product,
        text,
        email,
        images,
        firstName,
        comment: commentId,
        show: true
      })
    );
    setShouldValidate(false);
    setEditable(false);
  };

  const {
    values,
    errors,
    handleSubmit,
    handleBlur,
    setFieldValue,
    setShouldValidate
  } = useCommentValidation(!!userData, onSubmit, text);

  const handleCommentChange = (e) => {
    const value = e.target.value.replace(formRegExp.link, '');
    setFieldValue(TEXT, value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        multiline
        rows={commentFields.text.rows}
        value={values.text}
        className={styles.editableText}
        variant='outlined'
        onChange={handleCommentChange}
        onBlur={handleBlur}
        error={!!errors.text}
        helperText={errors.text || ''}
        name={TEXT}
      />
      <div className={styles.editForm}>
        <Button
          className={styles.editButton}
          onClick={setEditable.bind(this, false)}
        >
          {PDP_BUTTONS[language].cancelButton}
        </Button>
        <Button
          type='submit'
          className={styles.editButton}
          onClick={setShouldValidate.bind(this, true)}
        >
          {PDP_BUTTONS[language].submitButton}
        </Button>
        <Tooltip title={TOOLTIPS[language].delete} placement='right'>
          <DeleteForeverIcon
            className={styles.deleteIcon}
            onClick={handleOpen}
          />
        </Tooltip>
      </div>
    </form>
  );
};

export default EditableField;
