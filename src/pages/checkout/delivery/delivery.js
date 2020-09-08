import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector } from 'react-redux';
import {
  CHECKOUT_DELIVERY_TYPES,
  CHECKOUT_DROP_LIST,
  CHECKOUT_TITLES
} from '../../../translations/checkout.translations';
import { useStyles } from '../checkout.styles';

export const Delivery = () => {
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));
  const style = useStyles();
  const [deliveryType, setDeliveryType] = useState('');
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');
  const [department, setDepartment] = useState('');

  const selectHandlerDelivery = (event) => {
    setDeliveryType(event.target.value);
  };
  const selectHandlerRegion = (event) => {
    setRegion(event.target.value);
  };
  const selectHandlerCity = (event) => {
    setCity(event.target.value);
  };
  const selectHandlerDepartment = (event) => {
    setDepartment(event.target.value);
  };

  const deliveries = [
    CHECKOUT_DELIVERY_TYPES[language].selfPickUP,
    CHECKOUT_DELIVERY_TYPES[language].novaPoshta,
    CHECKOUT_DELIVERY_TYPES[language].ukrPoshta,
    CHECKOUT_DELIVERY_TYPES[language].currierNovaPoshta
  ];
  const regions = ['Lviv', 'Kyiv', 'Odesa'];
  const cities = ['Lviv', 'Brody'];
  const departments = [1, 2, 3];

  // if (deliveryType === CHECKOUT_DELIVERY_TYPES[language].novaPoshta ||
  //   deliveryType === CHECKOUT_DELIVERY_TYPES[language].ukrPoshta) {
  //   return (
  //     <FormControl variant='outlined' className={style.dataInput}>
  //       <InputLabel>Misto</InputLabel>
  //       <Select
  //         value={city}
  //         onChange={selectHandlerCity}
  //         label='city'
  //       >
  //         {cities.map((city) => (
  //           <MenuItem key={city} value={city}>
  //             {city}
  //           </MenuItem>
  //         ))}
  //       </Select>
  //     </FormControl>)
  // }

  return (
    <div className={style.deliveryType}>
      <div className={deliveryType && style.deliveryTypeSelected}>
        <div className={style.contactsFields}>
          <span className={style.subTitle}>
            {CHECKOUT_TITLES[language].delivery}
          </span>
          <div>
            <div className={style.contactField}>
              <FormControl variant='outlined' className={style.dataInput}>
                <InputLabel>
                  {CHECKOUT_DROP_LIST[language].deliveryType}
                </InputLabel>
                <Select
                  value={deliveryType}
                  onChange={selectHandlerDelivery}
                  label='deliveryType'
                >
                  {deliveries.map((delivery) => (
                    <MenuItem key={delivery} value={delivery}>
                      {delivery}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {deliveryType === CHECKOUT_DELIVERY_TYPES[language].novaPoshta ||
              deliveryType === CHECKOUT_DELIVERY_TYPES[language].ukrPoshta ? (
                <FormControl variant='outlined' className={style.dataInput}>
                  <InputLabel>Misto</InputLabel>
                  <Select
                    value={city}
                    onChange={selectHandlerCity}
                    label='city'
                  >
                    {cities.map((city) => (
                      <MenuItem key={city} value={city}>
                        {city}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ) : (
                'ololo'
              )}
            </div>
            {deliveryType === CHECKOUT_DELIVERY_TYPES[language].novaPoshta && (
              <div className={style.contactField}>
                <FormControl variant='outlined' className={style.dataInput}>
                  <InputLabel>Region</InputLabel>
                  <Select
                    value={region}
                    onChange={selectHandlerRegion}
                    label='region'
                  >
                    {regions.map((region) => (
                      <MenuItem key={region} value={region}>
                        {region}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl variant='outlined' className={style.dataInput}>
                  <InputLabel>Department</InputLabel>
                  <Select
                    value={department}
                    onChange={selectHandlerDepartment}
                    label='department'
                  >
                    {departments.map((department) => (
                      <MenuItem key={department} value={department}>
                        {department}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
