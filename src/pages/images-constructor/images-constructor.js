import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormControl, FormHelperText } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import useConstructorLoader from './use-constructor-loader';
import { useIsLoadingOrError } from '../../hooks/useIsLoadingOrError';

import { useStyles } from './images-constructor.style';
import Loader from '../../components/loader';
import PageTitle from '../../components/page-title';

import { constructorPartPrice } from '../../utils/constructor';
import ConstructorSubmit from './constructor-sumbit';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import { useAppStyles } from '../../components/app/app.styles';
import ConstructorCanvas from '../../components/constructor-canvas';
import { useCurrency } from '../../hooks/use-currency';
import { useCart } from '../../hooks/use-cart';

const ImagesConstructor = () => {
  const {
    constructorValues,
    setConstructorValues,
    constructorModel,
    setConstructorModel,
    currentConstructorModel,
    allPrices,
    allModels,
    setAllPrice,
    constructorsError,
    constructorError,
    valuesLoading
  } = useConstructorLoader();

  const { getPriceWithCurrency, currencySign } = useCurrency();
  const { cartOperations } = useCart();
  const styles = useStyles();
  const appStyles = useAppStyles();
  const { t } = useTranslation();
  const { isError } = useIsLoadingOrError([], [constructorsError, constructorError]);

  const canvasH = 768;
  const canvasW = 768;
  const { getConstructorPrice } = cartOperations;

  if (valuesLoading) {
    return errorOrLoadingHandler(isError, valuesLoading);
  }

  return (
    <div className={appStyles.rootApp}>
      <div className={`${appStyles.containerApp} ${styles.constructorWrapper}`}>
        <PageTitle title={t('common.title')} titleLine />
        <div className={styles.contentWrapper}>
          <form className={styles.formWrapper}>
            <FormControl>
              <p className={styles.headerWrapperH1}>{t('common.backpack')}</p>
              <Select
                className={styles.selectItem}
                label='title'
                data-cy='model'
                name='model'
                value={constructorModel}
                onChange={(e) => setConstructorModel(e.target.value)}
                data-testid='model'
              >
                {allModels.current.map((model) => (
                  <MenuItem className={styles.menuItem} key={model._id} value={model._id}>
                    {t(`${model.translationsKey}.name`)}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText className={styles.formHelper}>{t('common.models')}</FormHelperText>
            </FormControl>

            <FormControl>
              <Select
                className={styles.selectItem}
                label='title'
                data-cy='basics'
                name='basic'
                value={constructorValues.basic._id}
                onChange={(e) =>
                  setConstructorValues({
                    ...constructorValues,
                    basic: currentConstructorModel.current.basics.find(
                      (basic) => basic._id === e.target.value
                    )
                  })
                }
              >
                {currentConstructorModel.current.basics.map((basic) => (
                  <MenuItem className={styles.menuItem} key={basic._id} value={basic._id}>
                    {t(`${basic.translationsKey}.name`)}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText className={styles.formHelper}>{t('common.basis')}</FormHelperText>
            </FormControl>

            <FormControl>
              <Select
                className={styles.selectItem}
                label='title'
                name='patern'
                value={constructorValues.pattern?._id || ''}
                disabled={!constructorValues.pattern}
                onChange={(e) => {
                  setConstructorValues({
                    ...constructorValues,
                    pattern: currentConstructorModel.current.patterns.find(
                      (pattern) => pattern._id === e.target.value
                    )
                  });
                  setAllPrice((prevState) => ({
                    ...prevState,
                    pattern: constructorValues.pattern.absolutePrice
                  }));
                }}
              >
                {currentConstructorModel.current.patterns.map((pattern) => (
                  <MenuItem className={styles.menuItem} key={pattern._id} value={pattern._id}>
                    {t(`${pattern.translationsKey}.name`)}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText className={styles.formHelper}>{t('common.patterns')}</FormHelperText>
            </FormControl>

            <FormControl>
              <Select
                className={styles.selectItem}
                label='title'
                data-cy='bottom'
                name='bottom'
                value={constructorValues.bottom._id}
                onChange={(e) => {
                  setConstructorValues({
                    ...constructorValues,
                    bottom: currentConstructorModel.current.bottoms.find(
                      (bottom) => bottom._id === e.target.value
                    )
                  });
                  setAllPrice((prevState) => ({
                    ...prevState,
                    bottom: constructorValues.bottom.absolutePrice
                  }));
                }}
              >
                {currentConstructorModel.current.bottoms.map((bottom) => (
                  <MenuItem className={styles.menuItem} key={bottom._id} value={bottom._id}>
                    {t(`${bottom.translationsKey}.name`)}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText className={styles.formHelper}>{t('common.bottom')}</FormHelperText>
            </FormControl>

            <FormControl>
              <Select
                className={styles.selectItem}
                label='title'
                data-cy='size'
                name='size'
                value={constructorValues.sizeAndPrice.size._id}
                onChange={(e) =>
                  setConstructorValues({
                    ...constructorValues,
                    sizeAndPrice: {
                      size: currentConstructorModel.current.model.sizes.find(
                        (size) => size._id === e.target.value
                      )
                    }
                  })
                }
              >
                {currentConstructorModel.current.model.sizes.map(
                  (size) =>
                    size.available && (
                      <MenuItem className={styles.menuItem} key={size.name} value={size._id}>
                        {size.name}
                      </MenuItem>
                    )
                )}
              </Select>
              <FormHelperText className={styles.formHelper}>{t('common.size')}</FormHelperText>
            </FormControl>
          </form>

          <div className={styles.imageContainer}>
            {!constructorValues.basic && <Loader />}
            <ConstructorCanvas
              className={styles.image}
              item={constructorValues}
              width={canvasW}
              height={canvasH}
            />
          </div>

          <div className={styles.pricesInfoWrapper}>
            <p className={styles.headerWrapperH1}>{t('common.totalPrice')}</p>
            <div className={styles.textWrapper}>
              <ul>
                <div className={`${styles.line} ${styles.bottomLine}`} />
                <li className={styles.priceItem}>
                  <span>{t('common.defaultPrice')}</span>
                  <span className={styles.currencySign}>
                    {getPriceWithCurrency(constructorValues.basePrice)}
                    {currencySign}
                  </span>
                </li>
                <div className={`${styles.line} ${styles.topLine}`} />
                {constructorPartPrice(allPrices).map((item, index) =>
                  item ? (
                    <li key={index} className={styles.priceItem}>
                      <span>
                        {t(`common.constructorAdditionals`, { returnObjects: true })[index]}
                      </span>
                      <span className={styles.currencySign}>
                        {getPriceWithCurrency(item)} {currencySign}
                      </span>
                    </li>
                  ) : (
                    <div key={index} />
                  )
                )}
                <div className={`${styles.line} ${styles.bottomLine}`} />
              </ul>
            </div>
            <h2 className={styles.headerWrapper}>
              {t('common.endPrice')}
              <span className={styles.currencySign}>
                {getPriceWithCurrency(getConstructorPrice(constructorValues))}
                {currencySign}
              </span>
            </h2>
            <ConstructorSubmit constructorValues={constructorValues} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesConstructor;
