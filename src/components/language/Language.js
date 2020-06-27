import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { setToLocalStorage } from 'src/services/localstorage.service';
import LanguageIcon from '@material-ui/icons/Language';
import useStyles from './language.styles';

export default function SimpleSelect() {
  const [language, setLanguage] = React.useState(0);
  const styles = useStyles();

  const handleChange = () => {
    if (language) {
      setToLocalStorage('language', language);
      setLanguage(0);
    }
    if (!language) {
      setToLocalStorage('language', language);
      setLanguage(1);
    }
  };

  return (
    <div>
      <FormControl variant='outlined' className={styles.formControl}>
        <Select onChange={handleChange}>
          <MenuItem>
            <LanguageIcon />
          </MenuItem>
          <MenuItem value={0}>UA</MenuItem>
          <MenuItem value={1}>EN</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
