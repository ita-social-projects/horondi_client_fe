import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import _ from 'lodash';
import { useQuery } from '@apollo/client';
import { useStyles } from './nova-post.styles';
import { POSTOMAT } from '../../../../../utils/checkout';
import { CY_CODE_ERR, MATERIAL_UI_COLOR, TEXT_FIELD_VARIANT, RESET } from '../../../../../configs';
import { getNovaPoshtaCities, getNovaPoshtaWarehouses } from './operations/nova-post.queries.js';

const NovaPost = ({ setFieldValue, errors, touched, values }) => {
  const [citySearchValue, setCitySearchValue] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [cities, setCities] = useState([]);
  const [wareHouses, setWareHouses] = useState([]);
  const searchHandlerTimeout = useRef(null);

  const styles = useStyles({});

  const { t } = useTranslation();

  const {
    refetch: getCities,
    data: dataCities,
    loading: citiesLoading
  } = useQuery(getNovaPoshtaCities);

  const { data: dataHouses, loading: houseLoading } = useQuery(getNovaPoshtaWarehouses, {
    variables: { city: selectedCity },
    skip: !selectedCity,
    notifyOnNetworkStatusChange: true
  });

  useEffect(() => {
    setCitySearchValue(values.city);
    setSelectedCity(values.city);
  }, [values.city]);

  useEffect(() => {
    !citySearchValue && clearTimeout(searchHandlerTimeout.current);
    if (!citiesLoading && citySearchValue) {
      clearTimeout(searchHandlerTimeout.current);
      searchHandlerTimeout.current = setTimeout(() => {
        getCities({ city: citySearchValue });
      }, 1000);
    }
  }, [citySearchValue, citiesLoading, getCities]);

  useEffect(() => {
    if (dataCities) {
      setCities(dataCities.getNovaPoshtaCities);
    }
  }, [dataCities]);

  useEffect(() => {
    if (dataHouses) {
      setWareHouses(dataHouses.getNovaPoshtaWarehouses);
    }
  }, [dataHouses]);

  return (
    <div className={styles.novaPostContainer}>
      <h3 className={styles.novaPostTitle}>{t('delivery.deliveryAddress')}</h3>
      <div className={styles.novaPostData}>
        <div className={styles.selectorInfo}>
          <Autocomplete
            onInputChange={(_e, value, reason) => {
              if (reason !== RESET || (reason === RESET && value)) {
                value = value.trim().charAt(0).toUpperCase() + value.slice(1);
                setCitySearchValue(value);
              }
            }}
            noOptionsText={t('delivery.noCity')}
            onChange={(_event, value) => {
              if (value) {
                setSelectedCity(value.description);
                setFieldValue('city', value.description);
              } else {
                setSelectedCity('');
                setFieldValue('city', '');
              }
              setFieldValue('courierOffice', '');
            }}
            options={cities}
            inputValue={citySearchValue}
            getOptionLabel={(option) => option?.description || null}
            className={styles.dataInput}
            renderInput={(params) => (
              <TextField
                {...params}
                error={touched.city && !!errors.city}
                label={`${t('delivery.city')} *`}
                variant={TEXT_FIELD_VARIANT.OUTLINED}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: <>{params.InputProps.endAdornment}</>
                }}
              />
            )}
          />
          {touched.city && errors.city && (
            <div data-cy={CY_CODE_ERR} className={styles.error}>
              {t(errors.city)}
            </div>
          )}
        </div>
      </div>
      <div className={styles.novaPostData}>
        <div className={styles.selectorInfo}>
          <Autocomplete
            onInputChange={(_event, value, reason) => {
              if (reason !== RESET || (reason === RESET && value)) {
                setFieldValue('courierOffice', value);
              }
            }}
            noOptionsText={t('delivery.noDepartment')}
            onChange={(_event, value) => {
              if (value) {
                setFieldValue('courierOffice', value.description);
              } else {
                setFieldValue('courierOffice', '');
              }
            }}
            disabled={!selectedCity || !wareHouses.length}
            options={_.filter(
              wareHouses,
              (warehouseItem) => !warehouseItem.description.includes(POSTOMAT)
            )}
            inputValue={values.courierOffice}
            getOptionLabel={(option) => option?.description}
            className={styles.dataInput}
            renderInput={(params) => (
              <TextField
                {...params}
                error={touched.courierOffice && !!errors.courierOffice}
                label={`${t('delivery.department')} *`}
                variant={TEXT_FIELD_VARIANT.OUTLINED}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {houseLoading && (
                        <CircularProgress color={MATERIAL_UI_COLOR.INHERIT} size={20} />
                      )}
                      {params.InputProps.endAdornment}
                    </>
                  )
                }}
              />
            )}
          />

          {touched.courierOffice && errors.courierOffice && (
            <div data-cy={CY_CODE_ERR} className={styles.error}>
              {t(errors.courierOffice)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NovaPost;
