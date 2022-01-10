import React from 'react';

import { useStyles } from './certificates.styles';
import FilledCertificates from '../../containers/certificates/filled-certificates/filled-certificates';

const Certificates = () => {
  const styles = useStyles();

  // що передати в пропрси FilledCertificates ???
  // як в cart - useCart
  // const { cart: cartItems, cartOperations } = useCart(user);

  // Maks: запит на сервер через useQuery

  // Olya:
  // однаковий запит з адмінки і фронта на бек
  // getSertificates ...
  // errorOrLoadingHandler - for errors like in contacts
  // const { loading, error, data } = useQuery(getContacts, {});
  // if (loading || error) return errorOrLoadingHandler(error, loading);
  // const contacts = data.getContacts.items;

  // This code will be rewritten after backend part finished
  const items = [
    {
      code: 'HOR22075',
      price: '500',
      expirationDate: '15/11/2021 - 16/11/2022',
      status: 'active'
    },
    {
      code: 'WTJ77777',
      price: '1000',
      expirationDate: '12/10/2021 - 13/10/2022',
      status: 'active'
    }
  ];

  return (
    <div className={styles.root}>{items.length ? <FilledCertificates items={items} /> : null}</div>
  );
};

export default Certificates;
