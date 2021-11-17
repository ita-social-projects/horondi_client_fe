import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';

import { getFormatDate } from '../../../../utils/date';
import { getCurrencySign } from '../../../../utils/currency';
import { IMG_URL } from '../../../../configs';
import OrderHistoryTable from '../order-history-table/index';
import OrderHistoryOrderItem from '../order-history-order-item';
import { useStyles } from './order-history-order.styles';

import { statusColors } from '../../../../const/style-consts';

const OrderHistoryOrder = ({ order }) => {
  const { currency } = useSelector(({ Currency }) => ({
    currency: Currency.currency
  }));
  const { t, i18n } = useTranslation();
  const language = i18n.language === 'ua' ? 0 : 1;

  const { color } = statusColors.find((item) => item.label === order.status);

  const [visible, setVisible] = useState(true);

  const handleVisibility = () => {
    setTimeout(() => {
      setVisible(!visible);
    }, 100);
  };

  const styles = useStyles();

  const orderHistoryList = order.items.map((item) => (
    <OrderHistoryOrderItem
      key={item.product._id}
      item={item}
      language={language}
      currency={currency}
    />
  ));

  const imagesList = [];

  const quantityImg = order.items.length > 3 ? 3 : order.items.length;

  order.items.slice(0, quantityImg).map((item) =>
    imagesList.push(
      <div className={styles.imagesRow} key={item.product._id}>
        <img
          src={`${IMG_URL}${item.product.images.primary.thumbnail}`}
          alt='product-img'
          className={styles.imagesInner}
        />
      </div>
    )
  );

  if (order.items.length > 3) {
    const restOrderItems = order.items.length - quantityImg;
    imagesList.push(
      <div className={styles.imagesEmpty} key={`rest${restOrderItems}orderItems`}>
        <span>+{restOrderItems}</span>
      </div>
    );
  }

  const totalPrice = order.totalItemsPrice[currency].value;
  const currencySign = getCurrencySign(currency);
  const orderStatus = _.capitalize(t(`orderHistory.statuses.${[order.status]}`));
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
                №{order.orderNumber} {t(`orderHistory.tableField`.dated)} {dateInFormat}
              </div>
              <div className={styles.status} style={{ color }}>
                {orderStatus}
              </div>
            </div>
            <div className={visible ? styles.total : styles.blockNone}>
              <div>{t('orderHistory.amountOfOrder')}:</div>
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
            <div className={styles.totalText}>{t('orderHistory.amountOfOrder')}:</div>
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
