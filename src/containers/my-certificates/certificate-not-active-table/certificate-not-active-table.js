import React from 'react';

import { TableCell, TableRow } from '@material-ui/core';

import CertificateCodeCopy from '../../../images/certificates/certificateCodeCopy';
import CertificateCodeGift from '../../../images/certificates/certificateCodeGift';
import CertificateImages from '../../../images/certificates/CertificateImages';

const CertificateNotActiveTable = ({ dateHandler, item, t, styles }) => (
  <TableRow className={styles.tableNotActive}>
    <TableCell>
      <img
        src={CertificateImages[`image${item.value}`]}
        className={styles.imageNotActive}
        alt='certificate img'
      />
    </TableCell>
    <TableCell>
      <div className={styles.name}>
        <textarea className={styles.areaNotActive} type='text' defaultValue={item.name} />
      </div>
    </TableCell>
    <TableCell>
      <div className={styles.priceNotActive}>
        {item.value}
        {` ${t('certificate.currency')}`}
      </div>
    </TableCell>
    <TableCell>
      <div className={styles.dateNotActive}>
        {`${dateHandler(item.dateStart)} - ${dateHandler(item.dateEnd)}`}
      </div>
    </TableCell>
    <TableCell>
      {item.isUsed && <div className={styles.statusNotActive}>{t(`certificate.used`)}</div>}
      {item.isExpired && <div className={styles.statusNotActive}>{t(`certificate.expired`)}</div>}
      {item.inProgress && (
        <div className={styles.statusNotActive}>{t(`certificate.inProgress`)}</div>
      )}
    </TableCell>
    <TableCell>
      <div className={styles.actions}>
        <button className={styles.iconBtnNotActive}>
          <CertificateCodeCopy alt='certificate-copy-icon' />
        </button>
        <button className={styles.iconBtnNotActive}>
          <CertificateCodeGift alt='certificate-gift-icon' />
        </button>
      </div>
    </TableCell>
  </TableRow>
);

export default CertificateNotActiveTable;
