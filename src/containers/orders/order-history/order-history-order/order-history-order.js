import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';

import { getPriceOfProduct } from '../../../../utils/price';
import { getFormatDate } from '../../../../utils/date';
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

  const handleVisibility = () => {
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

  order.items.slice(0, quantityImg).map((item) =>
    imagesList.push(
      <div className={styles.imagesRow}>
        <img
          src={`${IMG_URL}${item.product.images.primary.thumbnail}`}
          alt='product-img'
          className={styles.imagesInner}
        />
      </div>
    )
  );

  if (order.items.length > 3) {
    imagesList.push(
      <div className={styles.imagesEmpty}>
        <span>+{order.items.length - quantityImg}</span>
      </div>
    );
  }

  const totalPrice = getPriceOfProduct(order.totalItemsPrice[currency].value);
  const currencySign = getCurrencySign(currency);
  const orderStatus = _.capitalize(ORDER_STATUSES[order.status][language]);
  const dateInFormat = getFormatDate(order.dateOfCreation);

  return (
    <div className={styles.root}>
      <Accordion style={{ borderLeft: `10px solid ${color}` }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
          onClick={handleVisibility}
        >
          <div className={styles.heading}>
            <div className={styles.info}>
              <div>
                №{order.orderNumber} {ORDER_HISTORY_TABLE_FIELDS[language].dated} {dateInFormat}
              </div>
              <div className={styles.status} style={{ color }}>
                {orderStatus}
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
              <div>
                {totalPrice} <FontAwesomeIcon icon={currencySign} />
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default OrderHistoryOrder;
