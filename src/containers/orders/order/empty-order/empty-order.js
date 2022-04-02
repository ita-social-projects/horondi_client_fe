import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { useStyles } from './empty-order.styles';
import routes from '../../../../configs/routes';
import PathBack from '../../cart/path-back/path-back';
import { BackpackIcon } from '../../../../images/backpack-icon';

const { pathToCategory } = routes;

const EmptyOrder = ({ emptyTitle, buttonTitle, name }) => {
  const styles = useStyles();

  return (
    <>
      <PathBack />
      <div className={styles.root} data-cy={name}>
        <Typography data-testid='title' className={styles.title} variant='h2'>
          {emptyTitle}
        </Typography>
        <BackpackIcon className={styles.defaultBackpackIcon} />
        <Link to={pathToCategory}>
          <Button className={styles.button} variant='contained'>
            {buttonTitle}
          </Button>
        </Link>
      </div>
    </>
  );
};

export default EmptyOrder;
