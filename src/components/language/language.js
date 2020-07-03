import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import { Button, Card, MenuItem } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {
  setToLocalStorage,
  getFromLocalStorage
} from '../../services/localstorage.service';
import useStyles from './language.styless';
import { changeLanguage } from '../../redux/language/language.actions';

const languageInLocalStorage = JSON.parse(getFromLocalStorage('language')) || 0;

const Language = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  dispatch(changeLanguage(languageInLocalStorage));

  const handleChange = (e) => {
    const targetValue = e.target.value;
    if (targetValue === languageInLocalStorage) {
      dispatch(changeLanguage(targetValue));
    }
    setToLocalStorage('language', targetValue);
    dispatch(changeLanguage(targetValue));
  };

  return (
    <div className={classes.root}>
      <Button id='lang-icon' variant='outlined' className={classes.icon}>
        <LanguageIcon />
      </Button>
      <Card>
        <ul className={classes.list} onClick={handleChange}>
          <MenuItem value={0}>UA</MenuItem>
          <MenuItem value={1}>EN</MenuItem>
        </ul>
      </Card>
    </div>
  );
};

export default Language;
