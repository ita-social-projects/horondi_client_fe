import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { TableCell, TableRow } from '@material-ui/core';

import { useStyles } from './certificate-item.styles';
import CertificateCodeCopy from '../../../images/certificateCodeCopy';
import Images from './images';

const CertificateItem = ({ item }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
  }

  return (
    <TableRow classes={{ root: styles.root }} data-cy='certificate-item'>
      <TableCell classes={styles.image} data-cy='certificate-item-img'>
        <img
          src={Images[`image${item.price}`]}
          className={styles.itemImg}
          alt='certificate img'
        />
      </TableCell>
      <TableCell data-cy='certificate-item-code'>
        <div className={styles.code} value={item.code}>
          <textarea className={styles.area} type='text' ref={textAreaRef} value={item.code} />
          <button className={styles.iconBtn} onClick={copyToClipboard}>
            <CertificateCodeCopy alt='certificate copy icon' className={styles.copyIcon} />
          </button>
        </div>
      </TableCell>
      <TableCell data-cy='certificate-item-price'>
        <div className={styles.price}>{item.price}</div>
      </TableCell>
      <TableCell data-cy='certificate-item-expiration'>
        <div className={styles.item}>{item.expirationDate}</div>
      </TableCell>
      <TableCell data-cy='certificate-item-status'>
        <div className={styles.status}>{t(`certificate.${item.status}`)}</div>
      </TableCell>
    </TableRow>
  );
};

export default CertificateItem;
