import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { TableCell, TableRow, Tooltip } from '@material-ui/core';
import Toast from '../../toast';
import { useStyles } from './certificate-item.styles';
import CertificateCodeCopy from '../../../images/certificates/certificateCodeCopy';
import CertificateCodeGift from '../../../images/certificates/certificateCodeGift';
import CertificateImages from '../../../images/certificates/CertificateImages';

const CertificateItem = ({ item, openModal }) => {
  const [isOpenedSnackbar, setIsOpenedSnackbar] = useState(false);
  const styles = useStyles();
  const { t } = useTranslation();

  const date = new Date().toISOString();
  const daysRemaining = Date.parse(item.dateEnd) - Date.parse(date);
  const isLessThanMonth = daysRemaining < 2678400000 && daysRemaining > 0;

  const dateHandler = (date) => date.slice(0, 10).split('-').reverse().join('/');

  const onCopyIconClick = () => {
    navigator.clipboard.writeText(item.name);
    setIsOpenedSnackbar(true);
  };

  return (
    <TableRow className={styles.root} data-cy='certificate-item'>
      <TableCell data-cy='certificate-item-img'>
        <img
          src={CertificateImages[`image${item.value}`]}
          className={styles.itemImg}
          alt='certificate img'
        />
      </TableCell>
      <TableCell data-cy='certificate-item-code'>
        <div className={styles.name}>
          <textarea className={styles.area} type='text' defaultValue={item.name} />
        </div>
      </TableCell>
      <TableCell data-cy='certificate-item-price'>
        <div className={styles.price}>
          {item.value}
          {` ${t('certificate.currency')}`}
        </div>
      </TableCell>
      <TableCell data-cy='certificate-item-expiration'>
        <div className={styles.date}>{`${dateHandler(item.dateStart)} - ${dateHandler(
          item.dateEnd
        )}`}</div>
      </TableCell>
      <TableCell data-cy='certificate-item-status'>
        {item.isActivated && <div className={styles.statusGreen}>{t(`certificate.active`)}</div>}
        {item.isUsed && <div className={styles.statusRed}>{t(`certificate.used`)}</div>}
        {item.isUsed === false && item.isActivated === false && (
          <div className={styles.statusBlue}>{t(`certificate.expired`)}</div>
        )}
      </TableCell>
      <TableCell data-cy='certificate-item-code'>
        <div className={styles.actions}>
          <Tooltip title={t('certificate.copy')} placement='top'>
            <button className={styles.iconBtn} onClick={onCopyIconClick} data-testid='copyIconBtn'>
              <CertificateCodeCopy alt='certificate-copy-icon' className={styles.certificateIcon} />
            </button>
          </Tooltip>
          <Tooltip title={t('certificate.gift')} placement='top'>
            <button className={styles.iconBtn}>
              <CertificateCodeGift
                alt='certificate-gift-icon'
                onClick={() => openModal(item)}
                className={styles.certificateIcon}
              />
            </button>
          </Tooltip>
        </div>
      </TableCell>
      <Toast
        isOpenedSnackbar={isOpenedSnackbar}
        setIsOpenedSnackbar={setIsOpenedSnackbar}
        message={t('certificate.successfulCopy')}
      />
    </TableRow>
  );
};

export default CertificateItem;
