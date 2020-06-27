import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useStyles from './language.styles';

export default function SimpleSelect() {
  const [age, setAge] = React.useState(0);
  console.log(age);
  const styles = useStyles();
  const handleChange = () => {
    age ? setAge(0) : setAge(1);
  };

  return (
    <div>
      <FormControl variant='outlined' className={styles.formControl}>
        <Select value={age} onChange={handleChange}>
          <MenuItem value={0}>UA</MenuItem>
          <MenuItem value={1}>EN</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
