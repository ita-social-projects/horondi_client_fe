import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { ArrowIcon } from '../../images/profile-icons';
import { useStyles } from './back-button.styles';
import routes from '../../configs/routes';

const { pathToMain } = routes;

const BackButton = ({ path }) => {
  const styles = useStyles();
  const history = useHistory();
  const backToCatalog = useCallback(() => {
    if (history.location.key) {
      history.goBack();
    } else {
      history.push(path);
    }
  }, [history, path]);
  return (
    <Button className={styles.backBtn} onClick={backToCatalog}>
      <ArrowIcon className={styles.arrowIcon} />
    </Button>
  );
};

BackButton.propType = {
  path: PropTypes.string
};

BackButton.defaultProps = {
  path: pathToMain
};

export default BackButton;
