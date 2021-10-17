import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { getCategoryURL } from '../../pages/home/categories-list/categories-list';
import { useStyles } from './footer-lists.styles';

import routes from '../../const/routes';
import { countPerPage } from '../../configs';
import { footerNavItems } from '../footer-links/const';

import { getContactsForFooterListContacts } from './operations/footer-lists-contacts-query';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';

const { pathToContacts } = routes;

const FooterLists = () => {
  const styles = useStyles();
  const [contacts, setContacts] = useState([]);

  const { t } = useTranslation();

  const { categories, language, quantityPerPage } = useSelector(
    ({ Categories, Language, Products }) => ({
      categories: Categories.list,
      language: Language.language,
      quantityPerPage: Products.countPerPage
    })
  );

  const { loading, error } = useQuery(getContactsForFooterListContacts, {
    onCompleted: (data) => setContacts(data.getContacts.items)
  });
  
  if (loading || error) return errorOrLoadingHandler(error, loading);

  const categoriesList = categories.length
    ? categories.map(({ _id, name }) => (
      <div key={_id}>
        <Typography variant='subtitle2'>
          <Link
            className={styles.cardLink}
            to={`/${getCategoryURL(name)}?page=1&${countPerPage}=${quantityPerPage}`}
          >
            {name[language].value}
          </Link>
        </Typography>
      </div>
    ))
    : null;

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
      <div>
        <Typography variant='subtitle2'>{item.phoneNumber}</Typography>
      </div>
      <div>
        <Typography variant='subtitle2'>{item.email}</Typography>
      </div>
      <div>
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