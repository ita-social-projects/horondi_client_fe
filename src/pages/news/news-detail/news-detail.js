import React from 'react';
import { useQuery } from '@apollo/client';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import {
  Card,
  Typography,
  CardContent,
  CardHeader,
  CardMedia,
  Breadcrumbs,
  Link,
  Button
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useStyles } from './news-detail.style';
import { IMG_URL, TIME_OPTIONS } from '../../../configs';
import { getNewsById } from '../operations/news-queries';
import errorOrLoadingHandler from '../../../utils/errorOrLoadingHandler';
import routes from '../../../configs/routes';

const NewsDetail = ({ match }) => {
  const articleId = match.params.id;
  const id = articleId.split('-')[0];

  const { loading, error, data } = useQuery(getNewsById, { variables: { id } });

  const styles = useStyles();
  const { t, i18n } = useTranslation();
  const dateLanguage = i18n.language === 'ua' ? 'ukr-UA' : 'en-US';

  if (loading || error) return errorOrLoadingHandler(error, loading);

  const article = data.getNewsById;
  const { translationsKey } = article;

  if (!t(`${translationsKey}.text`)) {
    return <h2>{t('newsDetail.change')}</h2>;
  }

  return (
    <div className={styles.root}>
      <Card className={styles.container}>
        <CardContent>
          <Breadcrumbs className={styles.breadcrumbs} aria-label='breadcrumb'>
            <Link underline='hover' color='inherit' href={routes.pathToMain}>
              {t('common.home')}
            </Link>
            <Link underline='hover' color='inherit' href={routes.pathToNews}>
              {t('common.news')}
            </Link>
            <Typography>{t(`${translationsKey}.title`)}</Typography>
          </Breadcrumbs>
          <CardHeader
            subheader={
              <Typography className={styles.date}>
                {new Date(parseInt(article.date)).toLocaleString(dateLanguage, TIME_OPTIONS)}
              </Typography>
            }
          />
          <Typography className={styles.articleTitle} gutterBottom variant='h2' component='h2'>
            {translationsKey ? t(`${translationsKey}.title`) : t('newsDetail.noTitle')}
          </Typography>
          <hr />
          <div className={styles.imagesContainer}>
            <CardMedia
              className={styles.media}
              image={IMG_URL + article.image}
              title={translationsKey ? t(`${translationsKey}.title`) : t('newsDetail.noTitle')}
              alt={translationsKey ? t(`${translationsKey}.title`) : t('newsDetail.noTitle')}
              component='div'
            />
          </div>
          <Typography variant='body2' component='div' className={styles.newsText} id='fullText'>
            {translationsKey ? parse(t(`${translationsKey}.text`)) : t('newsDetail.noText')}
          </Typography>
          <NavLink to='/catalog/products?page=1&sort=null&countPerPage=9'>
            <Button variant='contained' className={styles.shoppingButton}>
              {t('cart.empty')}
            </Button>
          </NavLink>
          <div className={styles.focusedText}>
            {translationsKey ? t(`${translationsKey}.title`) : t('newsDetail.noTitle')}
          </div>
        </CardContent>
        <iframe
          src='https://www.youtube.com/embed/rvLpAfcaAQQ'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
        <div className={styles.newsAuthorFooter}>
          <CardMedia
            className={styles.authorAvatar}
            image={IMG_URL + article.author.image}
            title={translationsKey ? t(`${translationsKey}.title`) : t('newsDetail.noTitle')}
            component='div'
            id='newsAuthorAvatar'
          />
          <div className={styles.madeByAuthor}>{t('newsDetail.madeByAuthor')}</div>
          <Typography className={styles.authorName}>
            {translationsKey ? t(`${translationsKey}.name`) : t('newsDetail.noAuthor')}
          </Typography>
        </div>
      </Card>
    </div>
  );
};

NewsDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default NewsDetail;
