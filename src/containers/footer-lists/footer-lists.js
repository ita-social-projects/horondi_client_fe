import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { getCategoryURL } from '../../pages/home/categories-list/categories-list';
import { useStyles } from './footer-lists.styles';
import {
  FOOTER_INFORMATION,
  FOOTER_CONTACTS,
  FOOTER_CATALOGS
} from '../../translations/footer.translations';
import routes from '../../const/routes';
import { countPerPage } from '../../configs';
import { getContactsForFooterListContacts } from './operations/footer-lists-contacts-query';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';

const { pathToContacts } = routes;

const FooterLists = () => {
  const styles = useStyles();

  const { categories, language, quantityPerPage } = useSelector(
    ({ Categories, Language, Products }) => ({
      categories: Categories.list,
      language: Language.language,
      quantityPerPage: Products.countPerPage
    })
  );

  const [contacts, setContacts] = useState([]);
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

  const informationList = FOOTER_INFORMATION[language].items.map((item) => (
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
          <Typography variant='h5'>{FOOTER_CATALOGS[language].title}</Typography>
        </div>
        {categoriesList}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <Typography variant='h5'>{FOOTER_INFORMATION[language].title}</Typography>
        </div>
        {informationList}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <Typography variant='h5'>{FOOTER_CONTACTS[language].title}</Typography>
        </div>
        {contactsList[0]}
        <div key={FOOTER_CONTACTS[language].more.id}>
          <Typography variant='subtitle2'>
            <Link to={pathToContacts} className={styles.cardLink}>
              <span>{FOOTER_CONTACTS[language].more.item}</span>
            </Link>
          </Typography>
        </div>
      </div>
    </>
  );
};

export default FooterLists;
