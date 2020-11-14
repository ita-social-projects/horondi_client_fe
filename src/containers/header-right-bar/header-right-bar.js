import React from 'react';
import { useStyles } from './header-right-bar.styles';

import Currency from '../currency';
import Language from '../language';
import CartHeader from '../cart-header';
import Cabinet from '../cabinet';

const HeaderRightBar = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Currency />
      <Language />
      <CartHeader />
      <Cabinet />
    </div>
  );
};

export default HeaderRightBar;
