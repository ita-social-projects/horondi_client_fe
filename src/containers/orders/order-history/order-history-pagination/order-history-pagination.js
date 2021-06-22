import React from 'react';
import { Pagination } from '@material-ui/lab';

import { useStyles } from './order-history-pagination.style';
import { TEXT_FIELD_VARIANT } from '../../../../const/material-ui';

const OrderHistoryPagination = ({ data }) => {
  const styles = useStyles();
  const [currentPage, quantityPages, changeHandler] = data;

  const changeHandlerClick = (_, value) => {
    changeHandler(value);
  };

  return (
    <div className={styles.paginationDiv}>
      <Pagination
        count={quantityPages}
        variant={TEXT_FIELD_VARIANT.OUTLINED}
        shape={TEXT_FIELD_VARIANT.ROUNTED}
        page={currentPage + 1}
        onChange={changeHandlerClick}
      />
    </div>
  );
};

export default OrderHistoryPagination;
