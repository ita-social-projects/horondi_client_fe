import { Checkbox } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import NumberInput from '../../../components/number-input';
import { INITIAL_CERTIFICATE_COUNT } from '../../../configs';
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
        <Checkbox className={styles.checkbox} checked={checked} onChange={handleCheckboxChange} />
        <div className={styles.certificate}>
          {t('certificate.giftCertificate')}
          <br />
          {t('certificate.for')} {value}
        </div>
      </div>
      <div className={styles.numberInput}>
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
