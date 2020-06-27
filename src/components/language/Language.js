import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { setToLocalStorage } from 'src/services/localstorage.service';
import LanguageIcon from '@material-ui/icons/Language';
import { InputLabel } from '@material-ui/core';
import useStyles from './language.styles';

export default function SimpleSelect() {
  const [language, setLanguage] = React.useState(0);
  const classes = useStyles();

  const handleChange = () => {
    if (!language) {
      setLanguage(1);
      setToLocalStorage('language', 1);
    }
    if (language) {
      setLanguage(0);
      setToLocalStorage('language', 0);
    }
  };

  return (
    <div>
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel id='demo-simple-select-label'>
          <LanguageIcon
            style={{ color: 'white', fontSize: '2rem', marginTop: '2rem' }}
          />
        </InputLabel>

        <Select value={language} onChange={handleChange}>
          <MenuItem value={0}>UA</MenuItem>
          <MenuItem value={1}>EN</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
