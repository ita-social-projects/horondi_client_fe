import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getCurrencySign } from '../../../../utils/currency';
import { IMG_URL } from '../../../../configs';
import OrderHistoryTable from '../order-history-table/index';
import OrderHistoryOrderItem from '../order-history-order-item';
import { useStyles } from './order-history-order.styles';
import {
  ORDER_HISTORY_TABLE_FIELDS,
  ORDER_STATUSES,
  ORDER_TABLE_FIELDS
} from '../../../../translations/order.translations';
import { statusColors } from '../../../../const/style-consts';

const OrderHistoryOrder = ({ order }) => {
  const { language, currency } = useSelector(({ Language, Currency }) => ({
    language: Language.language,
    currency: Currency.currency
  }));

  const { color } = statusColors.find((item) => item.label === order.status);

  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setTimeout(() => {
      setVisible(!visible);
    }, 100);
  };

  const styles = useStyles();

  const orderHistoryList = order.items.map((item) => (
    <OrderHistoryOrderItem key={item._id} item={item} language={language} currency={currency} />
  ));

  const imagesList = [];

  const quantityImg = order.items.length > 3 ? 3 : order.items.length;

  for (let i = 0; i < quantityImg; i++) {
    imagesList.push(
      <div className={styles.imagesRow}>
        <img
          src={`${IMG_URL}${order.items[i].product.images.primary.thumbnail}`}
          alt='product-img'
          className={styles.imagesInner}
        />
      </div>
    );
  }

  if (order.items.length > 3) {
    imagesList.push(
      <div className={styles.imagesEmpty}>
        <span>+{order.items.length - quantityImg}</span>
      </div>
    );
  }

  const totalPrice = (order.totalItemsPrice[currency].value / 100).toFixed(0);
  const currencySign = getCurrencySign(currency);

  return (
    <div className={styles.root}>
      <Accordion style={{ borderLeft: `10px solid ${color}` }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
          onClick={handleClick}
        >
          <div className={styles.heading}>
            <div className={styles.info}>
              <div>
                № {order.orderNumber} {ORDER_HISTORY_TABLE_FIELDS[language].dated}{' '}
                {new Intl.DateTimeFormat('en-GB').format(order.dateOfCreation)}
              </div>
              <div className={styles.status} style={{ color }}>
                {ORDER_STATUSES[order.status][language].toLowerCase()}
              </div>
            </div>
            <div className={visible ? styles.total : styles.blockNone}>
              <div>{ORDER_TABLE_FIELDS[language].amountOfOrder}:</div>
              <div className={styles.status}>
                {totalPrice} <FontAwesomeIcon icon={currencySign} />
              </div>
            </div>
            <div className={visible ? styles.images : styles.blockNone}>{imagesList}</div>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordion}>
          <div>
            <OrderHistoryTable items={orderHistoryList} totalPrice={totalPrice} />
          </div>
          <div className={styles.bottom}>
            <div className={styles.totalText}>{ORDER_TABLE_FIELDS[language].amountOfOrder}:</div>
            <div className={styles.totalText}>
              {totalPrice} <FontAwesomeIcon icon={currencySign} />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default OrderHistoryOrder;
