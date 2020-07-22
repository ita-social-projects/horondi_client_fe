import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { useStyles } from './confirmation.styles';
import { WELCOME_MESSAGE } from '../../configs';
import confirmUser from './confirmUser';

const Confirmation = ({ token }) => {
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    confirmUser(token)
      .then((data) => setConfirmed(true))
      .catch((err) => setError(err.errors[0]))
      .finally(() => setLoading(false));
  }, [token]);

  // HOOKS
  const { language } = useSelector((state) => ({
    language: state.Language.language
  }));

  const styles = useStyles();

  return (
    <div className={styles.confirmation}>
      <div className={styles.welcome}>
        <h2>{WELCOME_MESSAGE[language].h2}</h2>
        <h3>{WELCOME_MESSAGE[language].h3}</h3>
        <Button variant='contained'>{WELCOME_MESSAGE[language].button}</Button>
      </div>
    </div>
  );
};

export default Confirmation;
