import React from 'react';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ExpandMoreOutlined } from '@material-ui/icons';
import { useStyles } from './product-description.styles';
import Detail from '../detail';

const ProductDescription = ({ product, currentSize }) => {
  const styles = useStyles();
  const { mainMaterial, innerMaterial, bottomMaterial, translationsKey } = product;
  const { volumeInLiters, weightInKg } = currentSize;
  const { t } = useTranslation();

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
              {parse(
                String(t(`${translationsKey}.description`))
                  .replace(/&nbsp;/g, '')
                  .replace(/;/g, '. ')
              )}
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
        {volumeInLiters && weightInKg && product.available && (
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
                  description={`${volumeInLiters}`}
                />
                <Detail subtitle={t('product.weight.weightLabel')} description={`${weightInKg}`} />
              </Typography>
            </AccordionDetails>
          </Accordion>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
