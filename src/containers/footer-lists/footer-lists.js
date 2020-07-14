import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './footer-lists.styles';

import {
  FOOTER_INFORMATION,
  FOOTER_CONTACTS,
  FOOTER_CATALOGS
} from '../../translations/footer.translations';
import { URL_LANGUAGE, LANGUAGE } from '../../configs';
import { getCategories } from '../../redux/categories/categories.actions';

const FooterLists = ({ language = LANGUAGE }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { categories } = useSelector(({ Categories: { list } }) => ({
    categories: list
  }));

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const getCategoryURL = (category) => {
    const [filteredCategory] = category.filter(
      (item) => item.lang === URL_LANGUAGE
    );

    if (filteredCategory.value) {
      return filteredCategory.value.toLowerCase();
    }
  };

  const categoriesList = categories.map(({ _id, name }) => (
    <div key={_id}>
      <Typography variant='subtitle2'>
        <Link className={styles.cardLink} to={`/${getCategoryURL(name)}`}>
          {name[language].value}
        </Link>
      </Typography>
    </div>
  ));
  const informationList = FOOTER_INFORMATION[language].items.map((item) => (
    <div key={item.id}>
      <Typography variant='subtitle2'>
        <Link className={styles.cardLink} to={item.url}>
          {item.item}
        </Link>
      </Typography>
    </div>
  ));

  const contactsList = FOOTER_CONTACTS[language].items.map((item) => (
    <div key={item.id}>
      <Typography variant='subtitle2'>{item.item}</Typography>
    </div>
  ));
  return (
    <div className={styles.cardDeck}>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <Typography variant='h5'>
            {FOOTER_CATALOGS[language].title}
          </Typography>
        </div>
        {categoriesList}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <Typography variant='h5'>
            {FOOTER_INFORMATION[language].title}
          </Typography>
        </div>
        {informationList}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <Typography variant='h5'>
            {FOOTER_CONTACTS[language].title}
          </Typography>
        </div>
        {contactsList}
        <div key={FOOTER_CONTACTS[language].map.id}>
          <Typography variant='subtitle2'>
            <a
              className={styles.cardLink}
              target='_blank'
              href={FOOTER_CONTACTS[language].map.url}
              rel='noopener noreferrer'
            >
              {FOOTER_CONTACTS[language].map.item}
            </a>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default FooterLists;
