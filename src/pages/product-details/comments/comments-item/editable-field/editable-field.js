import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import useValidation from '../../../../../utils/use-validation';
import useStyles from './editable-field.styles';

import { errorMessages, formRegExp } from '../../../../../configs';
import { updateComment } from '../../../../../redux/products/products.actions';

import {
  TOOLTIPS,
  PDP_BUTTONS
} from '../../../../../translations/product-details.translations';

const EditableField = ({
  setEditable,
  text,
  handleOpen,
  commentId,
  username
}) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const { language, productId, userEmail } = useSelector(
    ({ Products, Language, User }) => ({
      productId: Products.product._id,
      language: Language.language,
      userEmail: User.email
    })
  );

  const {
    editableText,
    textValidated,
    shouldValidate,
    setTextValidated,
    setShouldValidate,
    setEditableText
  } = useValidation();

  useEffect(() => {
    setEditableText(text);
    setTextValidated(true);
  }, [setEditableText, setTextValidated, text]);

  const handleChange = (event) => {
    const { value } = event.target;
    const { script, link, text } = formRegExp;

    const noScriptText = value.replace(script, '');
    const noLinkText = noScriptText.replace(link, '');

    setEditableText(noLinkText);

    if (noLinkText.match(text) && noLinkText.trim().length >= 2) {
      setTextValidated(true);
    } else {
      setTextValidated(false);
    }
  };

  const handleSubmit = () => {
    if (text.trim() !== editableText.trim()) {
      setShouldValidate(true);
      if (textValidated) {
        dispatch(
          updateComment({
            show: true,
            product: productId,
            comment: commentId,
            text: editableText,
            email: userEmail,
            firstName: username
          })
        );
      }
    }
    setEditable(false);
  };

  return (
    <div>
      <TextField
        required
        multiline
        rows={7}
        value={editableText}
        className={styles.editableText}
        variant='outlined'
        onChange={(e) => handleChange(e)}
        error={!textValidated && shouldValidate}
        helperText={
          !textValidated && shouldValidate
            ? `${errorMessages[language].value.text}`
            : ''
        }
        type='text'
      />
      <div className={styles.editForm}>
        <Button
          className={styles.editButton}
          onClick={() => setEditable(false)}
        >
          {PDP_BUTTONS[language].cancelButton}
        </Button>
        <Button className={styles.editButton} onClick={handleSubmit}>
          {PDP_BUTTONS[language].submitButton}
        </Button>
        <Tooltip title={TOOLTIPS[language].delete} placement='right'>
          <DeleteForeverIcon
            className={styles.deleteIcon}
            onClick={handleOpen}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default EditableField;
