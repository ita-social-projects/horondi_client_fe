import React from 'react';
import { useTranslation } from 'react-i18next';

import { TableCell, TableRow, Tooltip } from '@material-ui/core';
import { useStyles } from './certificate-item.styles';
import CertificateCodeCopy from '../../../images/certificates/certificateCodeCopy';
import CertificateImages from '../../../images/certificates/CertificateImages';

const CertificateItem = ({ item }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  let status = item.isActive ? 'active' : 'used';
  if (!item.isUsed && !item.isActive) status = 'expired';

  const dateHandler = (date) => date.slice(0, 10).split('-').reverse().join('/');

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
        <div className={styles.code}>
          <textarea className={styles.area} type='text' defaultValue={item.code} />
          <Tooltip title={t('certificate.copy')}>
            <button
              className={styles.copyBtn}
              onClick={() => navigator.clipboard.writeText(item.code)}
            >
              <CertificateCodeCopy alt='certificate-copy-icon' className={styles.copyIcon} />
            </button>
          </Tooltip>
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
        {status === 'active' && (
          <div className={styles.statusGreen}>{t(`certificate.${status}`)}</div>
        )}
        {!item.isUsed && !item.isActive && (
          <div className={styles.statusBlue}>{t(`certificate.${status}`)}</div>
        )}
        {item.isUsed && <div className={styles.statusRed}>{t(`certificate.${status}`)}</div>}
      </TableCell>
    </TableRow>
  );
};

export default CertificateItem;
