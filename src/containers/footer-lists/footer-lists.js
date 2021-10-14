import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import { getCategoryURL } from '../../pages/home/categories-list/categories-list';
import { useStyles } from './footer-lists.styles';
import routes from '../../const/routes';
import { countPerPage } from '../../configs';

const { pathToContacts } = routes;

const FooterLists = () => {
  const styles = useStyles();
  const { t } = useTranslation();
  const getFooterInfo = t('footer.footerInformation.items', { returnObjects: true });

  const { categories, language, contacts, quantityPerPage } = useSelector(
    ({ Categories, Language, Contacts, Products }) => ({
      categories: Categories.list,
      language: Language.language,
      contacts: Contacts.contacts,
      quantityPerPage: Products.countPerPage
    })
  );

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

  const informationList = getFooterInfo.map((item) => (
    <div key={item.id}>
      <Typography variant='subtitle2'>
        <Link className={styles.cardLink} to={item.url}>
          {item.item}
        </Link>
      </Typography>
    </div>
  ));

  const contactsList = contacts.map((item) => (
    <div key={item._id}>
      <div>
        <Typography variant='subtitle2'>+{item.phoneNumber}</Typography>
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
          <Typography variant='h5'>{t('footer.footerContacts.title')}</Typography>
        </div>
        {contactsList[0]}
        <div>
          <Typography variant='subtitle2'>
            <Link to={pathToContacts} className={styles.cardLink}>
              <span>{t('footer.footerContacts.more')}</span>
            </Link>
          </Typography>
        </div>
      </div>
    </>
  );
};

export default FooterLists;
