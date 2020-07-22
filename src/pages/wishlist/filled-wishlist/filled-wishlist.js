import React from 'react';
import { useSelector } from 'react-redux';

import { useStyles } from './filled-wishlist.styles';
import WishlistItem from '../wishlist-item';
import { WISHLIST_TABLE_FIELDS } from '../../../translations/wishlist.translations';

const FilledWishlist = ({ items }) => {
  const language = useSelector(({ Language }) => Language.language);
  const styles = useStyles();

  return (
    <table className={styles.table}>
      <thead className={styles.tableHeader}>
        <tr>
          <th>{WISHLIST_TABLE_FIELDS[language].item}</th>
          <th>{WISHLIST_TABLE_FIELDS[language].price}</th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {items.map((item, i) => (
          <WishlistItem key={i} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default FilledWishlist;
