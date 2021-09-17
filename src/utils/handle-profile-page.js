import React from 'react';
import { Button } from '@material-ui/core';
import ProfilePicture from '../images/profile.png';

export const handleProfilePage = (title, constant, language, onClick, className) =>
  title ? (
    <h3>{constant[language].checkEmailText}</h3>
  ) : (
    <Button className={className} onClick={onClick}>
      {constant[language].btnTitle}
    </Button>
  );

export const handleClassName = (dataInput, nameInputs, afterText, name) =>
  `${dataInput} ${(name === 'firstName' || name === 'lastName') && nameInputs} ${
    name === 'email' && afterText
  }`;

export const handleText = (value, name) => value[name] || '';

export const handleProfileImg = (userImg) => userImg || ProfilePicture;
