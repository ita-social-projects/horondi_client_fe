import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { useStyles } from './confirmation.styles';
import { WELCOME_MESSAGE } from '../../translations/user.translations';
import { Loader } from '../../components/loader/loader';
import { confirmUser } from '../../redux/user/user.actions';
import { handleMessage } from '../../utils/handle-confirmation';

const Confirmation = ({ token }) => {
  const { language, loading, error } = useSelector(({ User, Language }) => ({
    language: Language.language,
    loading: User.userLoading,
    error: User.error
  }));

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
          <Button variant='contained' onClick={() => goTo('/')}>
            {WELCOME_MESSAGE[language].button_goToShop}
          </Button>
          <Button variant='contained' onClick={() => goTo('/login')}>
            {WELCOME_MESSAGE[language].button_logIn}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
