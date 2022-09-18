import React from 'react';

import { TableCell, TableRow, Tooltip } from '@material-ui/core';

import CertificateCodeCopy from '../../../images/certificates/certificateCodeCopy';
import CertificateCodeGift from '../../../images/certificates/certificateCodeGift';
import CertificateImages from '../../../images/certificates/CertificateImages';

const CertificateActiveTable = ({ dateHandler, isLessThanMonth, openModal, item, t, styles }) => (
  <TableRow className={isLessThanMonth ? styles.tableActiveRed : styles.tableActive}>
    <TableCell>
      <img
        src={CertificateImages[`image${item.value}`]}
        className={styles.imageActive}
        alt='certificate img'
      />
    </TableCell>
    <TableCell>
      <div className={styles.name}>
        <textarea className={styles.areaActive} type='text' defaultValue={item.name} />
      </div>
    </TableCell>
    <TableCell>
      <div className={styles.priceActive}>
        {item.value}
        {` ${t('certificate.currency')}`}
      </div>
    </TableCell>
    <TableCell>
      <div className={isLessThanMonth ? styles.dateActiveRed : styles.dateActive}>
        {`${dateHandler(item.dateStart)} - ${dateHandler(item.dateEnd)}`}
      </div>
    </TableCell>
    <TableCell>
      <div className={styles.statusActive}>{t(`certificate.active`)}</div>
    </TableCell>
    <TableCell>
      <div className={styles.actions}>
        <Tooltip title={t('certificate.copy')} placement='top'>
          <button
            className={styles.iconBtnActive}
            onClick={() => navigator.clipboard.writeText(item.name)}
          >
            <CertificateCodeCopy alt='certificate-copy-icon' className={styles.certificateIcon} />
          </button>
        </Tooltip>
        <Tooltip title={t('certificate.gift')} placement='top'>
          <button className={styles.iconBtnActive}>
            <CertificateCodeGift
              alt='certificate-gift-icon'
              onClick={() => openModal(item)}
              className={styles.certificateIcon}
            />
          </button>
        </Tooltip>
      </div>
    </TableCell>
  </TableRow>
);

export default CertificateActiveTable;
