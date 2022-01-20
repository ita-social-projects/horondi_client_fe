import { Checkbox } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import NumberInput from '../../../components/number-input';
import { getFromLocalStorage } from '../../../services/local-storage.service';
import { INITIAL_CERTIFICATE_COUNT, LIGHT_THEME, MATERIAL_UI_COLOR } from '../../../configs';
import { useStyles } from './certificate-checkbox.styles';

const CertificateCheckbox = ({
  handleAllCheckboxesChange,
  handleAllCountChange,
  index,
  value,
  checked
}) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const theme = getFromLocalStorage('theme');

  const checkTheme = () => {
    if (theme === LIGHT_THEME) {
      return MATERIAL_UI_COLOR.PRIMARY;
    }
    return MATERIAL_UI_COLOR.DEFAULT;
  };

  const [count, setCount] = useState(INITIAL_CERTIFICATE_COUNT);

  const handleCheckboxChange = (e) => {
    handleAllCheckboxesChange(e.target.checked, index);
  };

  const handleCountChange = (certificateCount) => {
    handleAllCountChange(certificateCount, index);
  };

  return (
    <div className={styles.root}>
      <div className={styles.checkboxWrapper}>
        <Checkbox
          className={styles.checkbox}
          color={checkTheme()}
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <div className={styles.certificate}>
          {t('certificates.giftCertificate')}
          <br />
          {t('certificates.for')} {value}
        </div>
      </div>
      <div>
        {checked ? (
          <NumberInput
            quantity={count}
            onChangeQuantity={handleCountChange}
            setInputValue={setCount}
          />
        ) : null}
      </div>
    </div>
  );
};

export default CertificateCheckbox;
