import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { TextField } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useStyles } from './ukrpost-and-courier.styles';
import {
  CY_CODE_ERR,
  deliveryTypes,
  RESET,
  MATERIAL_UI_COLOR,
  TEXT_FIELD_VARIANT
} from '../../../../../configs';
import { courierInputLabels, POST_OFFICE_NUMBER } from '../../../../../utils/checkout';
import {
  getUkrPoshtaRegions,
  getUkrPoshtaDistricts,
  getUkrPoshtaCities,
  getUkrPoshtaStreets,
  getUkrPoshtaPostOffices
} from './operations/get-ukrPost-address-data.queries';

import errorOrLoadingHandler from '../../../../../utils/errorOrLoadingHandler';
import { useIsLoadingOrError } from '../../../../../hooks/useIsLoadingOrError';

const UkrpostAndCourier = ({
  deliveryType,
  setFieldValue,
  handleChange,
  errors,
  touched,
  values,
  language
}) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const {
    loading: getRegionsLoading,
    error: getRegionsError,
    data: { getUkrPoshtaRegions: ukrPoshtaRegions } = []
  } = useQuery(getUkrPoshtaRegions);

  const {
    loading: getDistrictsLoading,
    error: getDistrictsError,
    data: { getUkrPoshtaDistrictsByRegionId: ukrPoshtaDistricts } = []
  } = useQuery(getUkrPoshtaDistricts, {
    variables: { id: values.regionId },
    skip: !values.regionId
  });

  const {
    loading: getCitiesLoading,
    error: getCitiesError,
    data: { getUkrPoshtaCitiesByDistrictId: ukrPoshtaCities } = []
  } = useQuery(getUkrPoshtaCities, {
    variables: { id: values.districtId },
    skip: !values.districtId
  });

  const {
    loading: getStreetsLoading,
    error: getStreetsError,
    data: { getUkrPoshtaStreetsByCityId: ukrPoshtaStreets } = []
  } = useQuery(getUkrPoshtaStreets, {
    variables: { id: values.cityId },
    skip: !values.cityId
  });

  const {
    loading: getPostOfficesLoading,
    error: getPostOfficesError,
    data: { getUkrPoshtaPostofficesCityId: ukrPoshtaPostOffices } = []
  } = useQuery(getUkrPoshtaPostOffices, {
    variables: { id: values.cityId },
    skip: !values.cityId
  });

  useEffect(() => {
    if (ukrPoshtaRegions) {
      Object.values(ukrPoshtaRegions).forEach((e) => {
        if (e.REGION_UA === values.region) {
          setFieldValue('regionId', e.REGION_ID);
        }
      });
    }
  }, [ukrPoshtaRegions, values.region, values.regionId, setFieldValue]);

  useEffect(() => {
    if (ukrPoshtaDistricts) {
      Object.values(ukrPoshtaDistricts).forEach((e) => {
        if (e.DISTRICT_UA === values.district) {
          setFieldValue('districtId', e.DISTRICT_ID);
        }
      });
    }
  }, [ukrPoshtaDistricts, values.district, setFieldValue]);

  useEffect(() => {
    if (ukrPoshtaCities) {
      Object.values(ukrPoshtaCities).forEach((e) => {
        if (e.CITY_UA === values.city) {
          setFieldValue('cityId', e.CITY_ID);
        }
      });
    }
  }, [ukrPoshtaCities, values.city, setFieldValue]);

  const { isError } = useIsLoadingOrError([
    getRegionsError,
    getDistrictsError,
    getCitiesError,
    getStreetsError,
    getPostOfficesError
  ]);

  const handleRegionInputChange = (value, reason) => {
    if (reason !== RESET || (reason === RESET && value)) {
      setFieldValue('region', value);
    }
  };
  const handleRegionChange = (value) => {
    if (value) {
      setFieldValue('region', value.REGION_UA);
      setFieldValue('regionId', value.REGION_ID);
      setFieldValue('district', '');
      setFieldValue('city', '');
      setFieldValue('courierOffice', '');
    } else {
      setFieldValue('region', '');
      setFieldValue('regionId', '');
    }
    setFieldValue('district', '');
    setFieldValue('city', '');
    setFieldValue('street', '');
    setFieldValue('house', '');
    setFieldValue('flat', '');
  };
  const handleDistrictInputChange = (value, reason) => {
    if (reason !== RESET || (reason === RESET && value)) {
      setFieldValue('district', value);
    }
  };
  const handleDistrictChange = (value) => {
    if (value) {
      setFieldValue('district', value.DISTRICT_UA);
      setFieldValue('districtId', value.DISTRICT_ID);
    } else {
      setFieldValue('districtId', '');
      setFieldValue('district', '');
    }
    setFieldValue('city', '');
    setFieldValue('street', '');
    setFieldValue('house', '');
    setFieldValue('flat', '');
  };
  const handleCityInputChange = (value, reason) => {
    if (reason !== RESET || (reason === RESET && value)) {
      setFieldValue('city', value);
    }
  };
  const handleCityChange = (value) => {
    if (value) {
      setFieldValue('city', value.CITY_UA);
      setFieldValue('cityId', value.CITY_ID);
    } else {
      setFieldValue('cityId', '');
      setFieldValue('city', '');
    }
    setFieldValue('street', '');
    setFieldValue('house', '');
    setFieldValue('flat', '');
  };
  const handleCourierOfficeInputChange = (value, reason) => {
    if (reason !== RESET || (reason === RESET && value)) {
      setFieldValue('courierOffice', value);
    }
  };
  const handleStreetInputChange = (value, reason) => {
    if (reason !== RESET || (reason === RESET && value)) {
      setFieldValue('street', value);
    }
  };
  const handleCourierOfficeChange = (value) => {
    if (value) {
      setFieldValue(
        'courierOffice',
        `${POST_OFFICE_NUMBER} ${value.POSTCODE}, ${
          value?.STREET_UA_VPZ ? value?.STREET_UA_VPZ : ''
        }`
      );
    } else {
      setFieldValue('courierOffice', '');
    }
  };
  const handleStreetChange = (value) => {
    if (value) {
      setFieldValue('street', value.STREET_UA);
    } else {
      setFieldValue('street', '');
    }
    setFieldValue('house', '');
    setFieldValue('flat', '');
  };

  if (isError) return errorOrLoadingHandler(isError);

  return (
    <div className={styles.addressContainer}>
      <h3 className={styles.addressTitle}>{t('delivery.deliveryAddress')}</h3>
      <div className={styles.inputWrapper}>
        <Autocomplete
          data-testid='region'
          name='region'
          onInputChange={(e, value, reason) => {
            handleRegionInputChange(value, reason);
          }}
          noOptionsText={t('delivery.noRegion')}
          onChange={(event, value) => {
            handleRegionChange(value);
          }}
          options={ukrPoshtaRegions || []}
          inputValue={values.region}
          getOptionLabel={(option) => option?.REGION_UA || ''}
          className={styles.dataInput}
          renderInput={(params) => (
            <TextField
              {...params}
              error={touched.region && !!errors.region}
              label={t('checkout.checkoutTextFields.region')}
              variant={TEXT_FIELD_VARIANT.OUTLINED}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {getRegionsLoading && (
                      <CircularProgress color={MATERIAL_UI_COLOR.INHERIT} size={20} />
                    )}
                    {params.InputProps.endAdornment}
                  </>
                )
              }}
            />
          )}
        />
        {touched.region && errors.region && (
          <div data-cy={CY_CODE_ERR} className={styles.error}>
            {t(errors.region)}
          </div>
        )}
        <Autocomplete
          onInputChange={(e, value, reason) => {
            handleDistrictInputChange(value, reason);
          }}
          noOptionsText={t('delivery.noDistrict')}
          onChange={(event, value) => {
            handleDistrictChange(value);
          }}
          disabled={!values.region}
          options={ukrPoshtaDistricts || []}
          inputValue={values.district}
          getOptionLabel={(option) => option?.DISTRICT_UA || ''}
          className={styles.dataInput}
          renderInput={(params) => (
            <TextField
              {...params}
              error={touched.district && !!errors.district}
              label={t('checkout.checkoutTextFields.district')}
              variant={TEXT_FIELD_VARIANT.OUTLINED}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {getDistrictsLoading && (
                      <CircularProgress color={MATERIAL_UI_COLOR.INHERIT} size={20} />
                    )}
                    {params.InputProps.endAdornment}
                  </>
                )
              }}
            />
          )}
        />
        {touched.district && errors.district && (
          <div data-cy={CY_CODE_ERR} className={styles.error}>
            {t(errors.district)}
          </div>
        )}
        <Autocomplete
          onInputChange={(e, value, reason) => {
            handleCityInputChange(value, reason);
          }}
          noOptionsText={t('delivery.noCity')}
          onChange={(event, value) => {
            handleCityChange(value);
          }}
          disabled={!values.district}
          options={ukrPoshtaCities || []}
          inputValue={values.city}
          getOptionLabel={(option) => option?.CITY_UA || ''}
          className={styles.dataInput}
          renderInput={(params) => (
            <TextField
              {...params}
              error={touched.city && !!errors.city}
              label={t('checkout.checkoutTextFields.city')}
              variant={TEXT_FIELD_VARIANT.OUTLINED}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {getCitiesLoading && (
                      <CircularProgress color={MATERIAL_UI_COLOR.INHERIT} size={20} />
                    )}
                    {params.InputProps.endAdornment}
                  </>
                )
              }}
            />
          )}
        />
        {touched.city && errors.city && (
          <div data-cy={CY_CODE_ERR} className={styles.error}>
            {t(errors.city)}
          </div>
        )}
        {deliveryType === deliveryTypes.UKRPOST ? (
          <>
            <Autocomplete
              onInputChange={(e, value, reason) => {
                handleCourierOfficeInputChange(value, reason);
              }}
              noOptionsText={t('delivery.noDepartment')}
              onChange={(event, value) => {
                handleCourierOfficeChange(value);
              }}
              disabled={!values.city}
              options={ukrPoshtaPostOffices || []}
              inputValue={values.courierOffice}
              getOptionLabel={(option) =>
                `${POST_OFFICE_NUMBER} ${option?.POSTCODE}, ${
                  option?.STREET_UA_VPZ ? option?.STREET_UA_VPZ : ''
                }` || ''
              }
              className={styles.dataInput}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={touched.courierOffice && !!errors.courierOffice}
                  label={t('checkout.checkoutTextFields.department')}
                  variant={TEXT_FIELD_VARIANT.OUTLINED}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {getPostOfficesLoading && (
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
          </>
        ) : (
          <>
            <Autocomplete
              onInputChange={(e, value, reason) => {
                handleStreetInputChange(value, reason);
              }}
              noOptionsText={t('delivery.noStreet')}
              onChange={(event, value) => {
                handleStreetChange(value);
              }}
              disabled={!values.city}
              options={ukrPoshtaStreets || []}
              inputValue={values.street}
              getOptionLabel={(option) => option?.STREET_UA || ''}
              className={styles.dataInput}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={touched.street && !!errors.street}
                  label={t('checkout.checkoutTextFields.street')}
                  variant={TEXT_FIELD_VARIANT.OUTLINED}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {getStreetsLoading && (
                          <CircularProgress color={MATERIAL_UI_COLOR.INHERIT} size={20} />
                        )}
                        {params.InputProps.endAdornment}
                      </>
                    )
                  }}
                />
              )}
            />
            {touched.street && errors.street && (
              <div data-cy={CY_CODE_ERR} className={styles.error}>
                {t(errors.street)}
              </div>
            )}
            {courierInputLabels(language).map((field) => (
              <div key={field.name}>
                <TextField
                  data-testid={field.name}
                  data-cy={field.name}
                  name={field.name}
                  className={styles.textField}
                  variant={TEXT_FIELD_VARIANT.OUTLINED}
                  label={field.label}
                  value={values[field.name]}
                  disabled={!values.street}
                  onChange={handleChange}
                  error={touched[field.name] && !!errors[field.name]}
                />
                {touched[field.name] && errors[field.name] && (
                  <div className={styles.error} data-cy={CY_CODE_ERR}>
                    {t(errors[field.name])}
                  </div>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default UkrpostAndCourier;
