import { useState } from 'react';
import { COMMENT_DATA } from '../configs';

const useValidation = () => {
  const [firstNameValidated, setFirstNameValidated] = useState(false);
  const [emailValidated, setEmailValidated] = useState(false);
  const [textValidated, setTextValidated] = useState(false);
  const [editableText, setEditableText] = useState('');
  const [allFieldsValidated, setAllFieldsValidated] = useState(false);
  const [shouldValidate, setShouldValidate] = useState(false);
  const [comment, setComment] = useState(COMMENT_DATA);

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
    setEditableText
  };
};

export default useValidation;
