import { useState } from 'react';
import { COMMENT_DATA, formRegExp, TEXT } from '../configs';

const useValidation = () => {
  const [firstNameValidated, setFirstNameValidated] = useState(false);
  const [emailValidated, setEmailValidated] = useState(false);
  const [textValidated, setTextValidated] = useState(false);
  const [editableText, setEditableText] = useState('');
  const [allFieldsValidated, setAllFieldsValidated] = useState(false);
  const [shouldValidate, setShouldValidate] = useState(false);
  const [comment, setComment] = useState(COMMENT_DATA);

  const clearFields = () => {
    setShouldValidate(false);
    setAllFieldsValidated(false);
    setEmailValidated(false);
    setFirstNameValidated(false);
    setTextValidated(false);
  };

  const filterText = (text, name) => {
    const noScriptText = text.replace(formRegExp.script, '');
    return name === TEXT
      ? noScriptText.replace(formRegExp.link, '')
      : noScriptText;
  };

  const validateField = (text, regExp, setValid) => {
    if (text.match(regExp) && text.trim().length >= 2) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return {
    firstNameValidated,
    emailValidated,
    textValidated,
    allFieldsValidated,
    shouldValidate,
    comment,
    editableText,
    setFirstNameValidated,
    setEmailValidated,
    setTextValidated,
    setAllFieldsValidated,
    setShouldValidate,
    setComment,
    setEditableText,
    clearFields,
    filterText,
    validateField
  };
};

export default useValidation;
