import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { Typography } from '@material-ui/core';
import { useStyles } from './confirmation.styles';
import { Loader } from '../../components/loader/loader';
import { confirmUser } from '../../redux/user/user.actions';
import routes from '../../configs/routes';

const { pathToMain } = routes;

const Confirmation = ({ token }) => {
  const { t, i18n } = useTranslation();

  const { loading, error } = useSelector(({ User }) => ({
    loading: User.userLoading,
    error: User.error
  }));

  const language = i18n.language === 'ua' ? 0 : 1;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(confirmUser({ token }));
  }, [dispatch, token]);

  const goTo = (path) => {
    dispatch(push(path));
  };

  const styles = useStyles();

  const handleMessage = (error) =>
    error ? (
      <Typography className={styles.text} variant='h4'>
        {t(error)}
      </Typography>
    ) : (
      <>
        <Typography className={styles.text} variant='h1'>
          {t(`confirmation.welcome`)}
        </Typography>
        <Typography className={styles.text} variant='h3'>
          {t(`confirmation.successRegistration`)}
        </Typography>
      </>
    );

  return (
    <div className={styles.confirmation}>
      <div className={styles.welcome}>
        {loading ? (
          <Loader heightWrap={130} />
        ) : (
          <>
            {handleMessage(error, language)}
            <div className={styles.buttonGroup}>
              <Button variant='contained' onClick={() => goTo(pathToMain)}>
                {t('confirmation.goToShop')}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Confirmation;
