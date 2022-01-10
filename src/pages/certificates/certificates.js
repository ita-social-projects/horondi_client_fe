import React from 'react';

// import { useSelector } from 'react-redux';
import { useStyles } from './certificates.styles';
import FilledCertificates from '../../containers/certificates/filled-certificates/filled-certificates';

const Certificates = () => {
  const styles = useStyles();

  // const { user } = useSelector(({ User }) => ({
  //   user: User.userData
  // }));

  // Maks: запит на сервер через useQuery

  // що передати в пропрси FilledCertificates ???
  // як в cart - useCart
  // const { cart: cartItems, cartOperations } = useCart(user);

  // однаковий запис з адмінки і фронта на бек
  // getSertificates ...
  // errorOrLoadingHandler - for errors like in contacts
  // const { loading, error, data } = useQuery(getContacts, {});
  // if (loading || error) return errorOrLoadingHandler(error, loading);
  // const contacts = data.getContacts.items;

  // sample:

  const items = [
    {
      code: 'HOR22075',
      price: '500 грн.',
      expirationDate: '15/11/2021 - 16/11/2022',
      status: 'active'
    },
    {
      code: 'WTJ77777',
      price: '500 грн.',
      expirationDate: '12/10/2021 - 13/10/2022',
      status: 'active'
    }
  ];

  return (
    <div className={styles.root}>
      {/* по аналогії з cart. якщо довжина масиву 0 - EmptyCertificates або FilledCertificates */}
      {items.length ? <FilledCertificates items={items} /> : null}
    </div>
  );
};

export default Certificates;
