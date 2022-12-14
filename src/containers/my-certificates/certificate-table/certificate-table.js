import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import TableComponent from '../../../components/table';
import Toast from '../../toast';
import CertificateCodeCopy from '../../../images/certificates/certificateCodeCopy';
import CertificateCodeGift from '../../../images/certificates/certificateCodeGift';
import CertificateImages from '../../../images/certificates/CertificateImages';
import { useStyles } from './certificate-table.styles';
import { ROW_FIELDS } from '../../../configs/index';

const CertificateTable = ({ items, openModal }) => {
  const { t } = useTranslation();
  const [isOpenedSnackbar, setIsOpenedSnackbar] = useState(false);
  const styles = useStyles();

  const { expireDate } = useSelector(({ User }) => ({
    expireDate: User.userData.certificateExpires
  }));

  const dateHandler = (date) => new Date(date).toLocaleDateString('uk-UA').replace(/\./g, '/');

  const getStyles = (item, className) => {
    if (item.dateEnd === expireDate) return `${styles[className]} ${styles.expires}`;
    if (item.isActivated) return styles[className];
    return `${styles[className]} ${styles.notActive}`;
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

  const rowActions = {
    style: styles.actionItems,
    actions: [
      {
        id: 1,
        title: (item) => (item.isActivated ? t('certificate.copy') : ''),
        func: (item) => item.isActivated && onCopyIconClick(item),
        style: styles.iconBtn,
        icon: <CertificateCodeCopy />
      },
      {
        id: 2,
        title: (item) => (item.isActivated ? t('certificate.gift') : ''),
        func: (item) => item.isActivated && openModal(item),
        style: styles.iconBtn,
        icon: <CertificateCodeGift />
      }
    ]
  };

  const bodyColumns = [
    {
      altText: 'certificate',
      style: styles.image,
      calculatedCellValue: (item) => CertificateImages[`image${item.value}`]
    },
    {
      style: styles.code,
      calculatedCellValue: (item) => `${item.name}`
    },
    {
      style: styles.price,
      calculatedCellValue: (item) => `${item.value} ${t('certificate.currency')}`
    },
    {
      style: styles.date,
      calculatedCellValue: (item) => `${dateHandler(item.dateStart)} - ${dateHandler(item.dateEnd)}`
    },
    {
      style: styles.status,
      calculatedCellValue: (item) => checkStatus(item)
    }
  ];

  return (
    <div className={styles.root}>
      <h2 className={styles.titleWrapper}>{t('certificate.title')}</h2>
      <div className={styles.table}>
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
