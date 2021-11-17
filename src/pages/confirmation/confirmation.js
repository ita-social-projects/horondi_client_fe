import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { useStyles } from './confirmation.styles';
import { Loader } from '../../components/loader/loader';
import { confirmUser } from '../../redux/user/user.actions';
import { handleMessage } from '../../utils/handle-confirmation';
import routes from '../../const/routes';

const { pathToMain, pathToLogin } = routes;

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

  return (
    <div className={styles.confirmation}>
      <div className={styles.welcome}>
        {loading ? <Loader /> : handleMessage(error, language)}
        <div className={styles.buttonGroup}>
          <Button variant='contained' onClick={() => goTo(pathToMain)}>
            {t('confirmation.goToShop')}
          </Button>
          <Button variant='contained' onClick={() => goTo(pathToLogin)}>
            {t('confirmation.logIn')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
