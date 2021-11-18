import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import phoneNumberIcon from '../../images/footer-icons/phone.svg';
import emailIcon from '../../images/footer-icons/email.svg';
import locationIcon from '../../images/footer-icons/location.svg';

import { getCategoryURL } from '../../pages/home/categories-list/categories-list';
import { useStyles } from './footer-lists.styles';
import routes from '../../configs/routes';
import { countPerPage } from '../../configs';
import { footerNavItems } from '../footer-links/const';

import { getContactsForFooterListContacts } from './operations/footer-lists-contacts-query';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import { CategoriesContext } from '../../context/categories/categories-context';

const { pathToContacts } = routes;

const FooterLists = () => {
  const styles = useStyles();
  const [contacts, setContacts] = useState([]);
  const { categories } = useContext(CategoriesContext);
  const { t, i18n } = useTranslation();
  const language = i18n.language === 'ua' ? 0 : 1;
  const { quantityPerPage } = useSelector(({ Products }) => ({
    quantityPerPage: Products.countPerPage
  }));

  const { loading, error } = useQuery(getContactsForFooterListContacts, {
    onCompleted: (data) => setContacts(data.getContacts.items)
  });

  if (loading || error) return errorOrLoadingHandler(error, loading);

  const categoriesList = categories.map(({ _id, name, translationsKey }) => (
    <div key={_id}>
      <Typography variant='subtitle2'>
        <Link
          className={styles.cardLink}
          to={`/${getCategoryURL(name)}?page=1&${countPerPage}=${quantityPerPage}`}
        >
          {t(`${translationsKey}.name`)}
        </Link>
      </Typography>
    </div>
  ));

  const informationList = footerNavItems.map((item) => (
    <div key={item.id}>
      <Typography variant='subtitle2'>
        <Link className={styles.cardLink} to={item.url}>
          {t(`footer.footerInformation.${item.label}`)}
        </Link>
      </Typography>
    </div>
  ));

  const contactsList = contacts.map((item) => (
    <div key={item._id}>
      <div className={styles.contactsListContainer}>
        <img alt='phone icon' src={phoneNumberIcon} />
        <Typography className='phoneN' variant='subtitle2'>
          {item.phoneNumber}
        </Typography>
      </div>
      <div className={styles.contactsListContainer}>
        <img alt='email icon' src={emailIcon} />
        <Typography variant='subtitle2'>{item.email}</Typography>
      </div>
      <div className={styles.contactsListContainer}>
        <img alt='location icon' src={locationIcon} />
        <Typography variant='subtitle2'>{item.address[language].value}</Typography>
      </div>
    </div>
  ));
  return (
    <>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <Typography variant='h5'>{t('footer.catalogs')}</Typography>
        </div>
        {categoriesList}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <Typography variant='h5'>{t('footer.footerInformation.title')}</Typography>
        </div>
        {informationList}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <Typography variant='h5'>{t('footer.contacts')}</Typography>
        </div>
        {contactsList[0]}
        <div key={t('footer.moreInformation')}>
          <Typography variant='subtitle2'>
            <Link to={pathToContacts} className={styles.cardLink}>
              <span>{t('footer.moreInformation')}</span>
            </Link>
          </Typography>
        </div>
      </div>
    </>
  );
};

export default FooterLists;
