import React from 'react';
import { Pagination } from '@material-ui/lab';

import { useStyles } from './order-history-pagination.style';

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
        variant='outlined'
        shape='rounded'
        page={currentPage + 1}
        onChange={changeHandlerClick}
      />
    </div>
  );
};

export default OrderHistoryPagination;
