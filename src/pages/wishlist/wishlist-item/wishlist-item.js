import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useStyles } from './wishlist-item.styles';
import { WISHLIST_BUTTONS } from '../../../translations/wishlist.translations';
import { IMG_URL } from '../../../configs';
import { getCurrencySign } from '../../../utils/currency';
import routes from '../../../const/routes';

const { pathToProducts } = routes;

const WishlistItem = ({ item, setModalVisibility, setModalItem }) => {
  const { language, currency } = useSelector(({ Language, Currency }) => ({
    language: Language.language,
    currency: Currency.currency
  }));
  const styles = useStyles();
  const currencySign = getCurrencySign(currency);
  const onRemoveItem = () => {
    setModalVisibility(true);
    setModalItem(item);
  };

  return (
    <tr className={styles.root} data-cy='wishlist-item'>
      <td>
        <div className={styles.image} data-cy='wishlist-item-img'>
          <Link to={`${pathToProducts}/${item._id}`}>
            <img src={`${IMG_URL}${item.images.primary.small}`} alt='product pictures' />
          </Link>
        </div>
        <div className={styles.description} data-cy='wishlist-item-description'>
          <span className={styles.itemName}>{item.name[language].value}</span>
          <Button variant='contained'>
            <Link to={`${pathToProducts}/${item._id}`}>{WISHLIST_BUTTONS[language].toItem}</Link>
          </Button>
        </div>
      </td>
      <td className={styles.price}>
        <span>
          {Math.round(item.basePrice[currency].value / 100)}
          {'\u00A0'}
          <FontAwesomeIcon icon={currencySign} />
        </span>
        <DeleteIcon
          className={styles.trash}
          onClick={onRemoveItem}
          data-cy='wishlist-item-remove'
        />
      </td>
    </tr>
  );
};

export default WishlistItem;
