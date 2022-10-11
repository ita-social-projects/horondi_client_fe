import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import TableComponent from '../../../components/table';
import Toast from '../../toast';
import CertificateCodeCopy from '../../../images/certificates/certificateCodeCopy';
import CertificateCodeGift from '../../../images/certificates/certificateCodeGift';
import CertificateImages from '../../../images/certificates/CertificateImages';
import { useActiveStyles, useExpiringStyles, useNotActiveStyles } from './certificate-table.styles';
import { ROW_FIELDS } from '../../../configs/index';

const CertificateTable = ({ items, openModal }) => {
  const { t } = useTranslation();
  const [isOpenedSnackbar, setIsOpenedSnackbar] = useState(false);
  const activeStyles = useActiveStyles();
  const expiringStyles = useExpiringStyles();
  const notActiveStyles = useNotActiveStyles();

  const { expireDate } = useSelector(({ User }) => ({
    expireDate: User.userData.certificateExpires
  }));

  const dateHandler = (date) => date.slice(0, 10).split('-').reverse().join('/');

  const getStyles = (item) => {
    if (item.dateEnd === expireDate) return expiringStyles;
    if (item.isActivated) return activeStyles;
    return notActiveStyles;
  };

  const onCopyIconClick = (item) => {
    navigator.clipboard.writeText(item.name);
    setIsOpenedSnackbar(true);
  };

  const checkStatus = (item) => {
    if (item.isExpired) return t(`certificate.expired`);
    if (item.isUsed) return t(`certificate.used`);
    if (item.inProgress) return t(`certificate.inProgress`);
    return t(`certificate.active`);
  };

  const rowActions = [
    {
      id: 1,
      title: (item) => (item.isActivated ? t('certificate.copy') : ''),
      func: (item) => item.isActivated && onCopyIconClick(item),
      style: (item) => getStyles(item).iconBtn,
      icon: <CertificateCodeCopy />
    },
    {
      id: 2,
      title: (item) => (item.isActivated ? t('certificate.gift') : ''),
      func: (item) => item.isActivated && openModal(item),
      style: (item) => getStyles(item).iconBtn,
      icon: <CertificateCodeGift />
    }
  ];

  const bodyColumns = [
    {
      altText: 'certificate',
      style: (item) => getStyles(item).image,
      calculatedCellValue: (item) => CertificateImages[`image${item.value}`]
    },
    {
      style: (item) => getStyles(item).code,
      calculatedCellValue: (item) => `${item.name}`
    },
    {
      style: (item) => getStyles(item).price,
      calculatedCellValue: (item) => `${item.value} ${t('certificate.currency')}`
    },
    {
      style: (item) => getStyles(item).date,
      calculatedCellValue: (item) => `${dateHandler(item.dateStart)} - ${dateHandler(item.dateEnd)}`
    },
    {
      style: (item) => getStyles(item).status,
      calculatedCellValue: (item) => checkStatus(item)
    }
  ];

  return (
    <div className={activeStyles.root}>
      <h2 className={activeStyles.titleWrapper}>{t('certificate.title')}</h2>
      <div className={activeStyles.table}>
        <TableComponent
          items={items}
          headerColumns={ROW_FIELDS.CERTIFICATE}
          bodyColumns={bodyColumns}
          rowActions={rowActions}
          styles={getStyles}
        />
      </div>
      <Toast
        isOpenedSnackbar={isOpenedSnackbar}
        setIsOpenedSnackbar={setIsOpenedSnackbar}
        message={t('certificate.successfulCopy')}
      />
    </div>
  );
};

export default CertificateTable;
