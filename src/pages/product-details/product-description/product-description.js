import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ExpandMoreOutlined } from '@material-ui/icons';
import { useStyles } from './product-description.styles';
import * as colorImage from '../../../images/red.jpg';
import * as patternImage from '../../../images/pattern_2.jpg';
import Detail from '../detail';

const ProductDescription = ({ product }) => {
  const styles = useStyles({
    colorUrl: colorImage,
    patternUrl: patternImage
  });
  const { description, mainMaterial, innerMaterial, bottomMaterial } = product;
  const { currentWeight, currentVolume } = useSelector(
    ({ Language, Products: { productToSend }, Currency }) => ({
      language: Language.language,
      currentWeight: productToSend.dimensions.weightInKg || 0,
      currentVolume: productToSend.dimensions.volumeInLiters || 0,
      currency: Currency.currency
    })
  );
  const { t, i18n } = useTranslation();
  const language = i18n.language === 'ua' ? 0 : 1;

  return (
    <div className={styles.details}>
      <div className={styles.description}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreOutlined />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography className={styles.title}>
              {t('product.productDescription.description')}{' '}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component='div' className={styles.text}>
              {parse(description[language].value.replace(/;/g, '. '))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className={styles.description}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreOutlined />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography className={styles.title}>
              {t('product.productDescription.material')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component='div' className={styles.text}>
              <Detail
                subtitle={t('product.productDescription.mainMaterial')}
                description={t(`${mainMaterial.material.translationsKey}.name`)}
              />
              <Detail
                subtitle={t('product.productDescription.innerMaterial')}
                description={t(`${innerMaterial.material.translationsKey}.name`)}
              />
              <Detail
                subtitle={t('product.productDescription.bottomMaterial')}
                description={t(`${bottomMaterial.material.translationsKey}.name`)}
              />
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className={styles.description}>
        {currentVolume && currentWeight ? (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreOutlined />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography className={styles.title}>
                {t('product.productDescription.measurement')}{' '}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component='div' className={styles.text}>
                <Detail
                  subtitle={t('product.weight.volumeLabel')}
                  description={`${currentVolume}`}
                />
                <Detail
                  subtitle={t('product.weight.weightLabel')}
                  description={`${currentWeight}`}
                />
              </Typography>
            </AccordionDetails>
          </Accordion>
        ) : null}
      </div>
    </div>
  );
};

export default ProductDescription;
