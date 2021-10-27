import React from 'react';
import { Button } from '@material-ui/core';
import ProfilePicture from '../images/profile.png';

export const handleProfilePage = (title, buttonTitle, checkEmailText, onClick, className) =>
  title ? (
    <h3>{checkEmailText}</h3>
  ) : (
    <Button className={className} onClick={onClick}>
      {buttonTitle}
    </Button>
  );

export const handleClassName = (dataInput, nameInputs, afterText, name) =>
  `${dataInput} ${(name === 'firstName' || name === 'lastName') && nameInputs} ${
    name === 'email' && afterText
  }`;

export const handleText = (value, name) => value[name] || '';

export const handleProfileImg = (userImg) => userImg || ProfilePicture;
