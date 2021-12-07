import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
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
        <h2>{t('product.productDescription.description')}</h2>
        <Detail description={parse(description[language].value)} />
      </div>

      <div className={styles.material}>
        <h2>{t('product.productDescription.material')}</h2>
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
      </div>

      <div className={styles.measurement}>
        <h2>{t('product.productDescription.measurement')}</h2>
        {currentVolume && currentWeight ? (
          <div>
            <Detail subtitle={t('product.weight.volumeLabel')} description={`${currentVolume}`} />
            <Detail subtitle={t('product.weight.weightLabel')} description={`${currentWeight}`} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductDescription;
