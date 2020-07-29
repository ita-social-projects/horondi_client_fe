import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { useStyles } from './confirmation.styles';
import { WELCOME_MESSAGE, CONFIRM_ERROR } from '../../configs';
import confirmUser from './confirmUser';
import { Loader } from '../../components/loader/loader';

const Confirmation = ({ token }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // HOOKS
  const { language } = useSelector((state) => ({
    language: state.Language.language
  }));

  useEffect(() => {
    setLoading(true);
    confirmUser(token, language)
      .catch((err) => setError(err.message.replace('GraphQL error: ', '')))
      .finally(() => setLoading(false));
  }, [token, language]);

  const styles = useStyles();

  return (
    <div className={styles.confirmation}>
      <div className={styles.welcome}>
        {loading ? (
          <Loader />
        ) : error ? (
          <>
            <h3>{CONFIRM_ERROR[language].value}</h3>
          </>
        ) : (
          <>
            <h2>{WELCOME_MESSAGE[language].h2}</h2>
            <h3>{WELCOME_MESSAGE[language].h3}</h3>
          </>
        )}
        <Button variant='contained'>{WELCOME_MESSAGE[language].button}</Button>
      </div>
    </div>
  );
};

export default Confirmation;
