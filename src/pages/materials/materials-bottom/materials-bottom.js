import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Carousel from 'react-multi-carousel';
import parse from 'html-react-parser';
import { responsive } from './constants';
import { useStyles } from './materials-bottom.style';
import { IMG_URL } from '../../../configs/index';

const MaterialsBottom = ({ materialsBottom }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const materialsBottomItems = materialsBottom.map((item) => (
    <Card key={item._id} className={styles.card}>
      <CardMedia className={styles.media} image={`${IMG_URL}${item.image.medium}`}>
        <CardContent className={styles.content}>
          {parse(t(`${item.translationsKey}.text`))}
        </CardContent>
      </CardMedia>
    </Card>
  ));

  return (
    <>
      {materialsBottom.length > 0 && <h2>{t(`materialsPage.bottom`)}</h2>}
      <Carousel infinite={false} className={styles.carousel} responsive={responsive}>
        {materialsBottomItems}
      </Carousel>
    </>
  );
};

export default MaterialsBottom;
