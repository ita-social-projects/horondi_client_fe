import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ExpandMoreOutlined } from '@material-ui/icons';
import { useStyles } from './product-description.styles';
import Detail from '../detail';

const ProductDescription = ({ product, currentSize }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const descriptions = useMemo(
    () => [
      {
        tittle: t('product.productDescription.description'),
        text: parse(
          String(t(`${product.translationsKey}.description`))
            .replace(/&nbsp;/g, '')
            .replace(/;/g, '. ')
        )
      },
      {
        tittle: t('product.productDescription.material'),
        details: [
          {
            subtitle: t('product.productDescription.mainMaterial'),
            description: t(`${product.mainMaterial.material.translationsKey}.name`)
          },
          {
            subtitle: t('product.productDescription.innerMaterial'),
            description: t(`${product.innerMaterial.material.translationsKey}.name`)
          },
          {
            subtitle: t('product.productDescription.bottomMaterial'),
            description: t(`${product.bottomMaterial.material.translationsKey}.name`)
          }
        ]
      },
      {
        tittle: Object.keys(currentSize).length > 0 && t('product.productDescription.measurement'),
        details: [
          {
            subtitle: t('product.weight.volumeLabel'),
            description: currentSize?.volumeInLiters
          },
          {
            subtitle: t('product.weight.weightLabel'),
            description: currentSize?.weightInKg
          }
        ]
      }
    ],
    [currentSize, t, product]
  );

  const descriptionItems = useMemo(
    () =>
      descriptions.map((description) => {
        const details = description.details?.map(({ subtitle, description }) => (
          <Detail key={subtitle} subtitle={subtitle} description={description} />
        ));

        return (
          description.tittle && (
            <div className={styles.description} key={description.tittle}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreOutlined />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography className={styles.title}>{description.tittle}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography component='div' className={styles.text}>
                    {description.text || details}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          )
        );
      }),
    [descriptions, styles]
  );

  return <div className={styles.details}>{descriptionItems}</div>;
};

export default ProductDescription;
