import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { useStyles } from './facebook-icon.styles';

export const FacebookIcon = ({ color }) => {
  const styles = useStyles();
  return (
    <SvgIcon className={styles.icon} viewBox='0 0 40 40' fill='none'>
      <g clipPath='url(#clip0_9251_208)'>
        <path
          d='M17.2977 29V20.5539H15.0002V17.5129H17.2977V14.9154C17.2977 12.8744 18.6549 11 21.782 11C23.0481 11 23.9843 11.118 23.9843 11.118L23.9105 13.9578C23.9105 13.9578 22.9557 13.9487 21.9138 13.9487C20.7861 13.9487 20.6054 14.4539 20.6054 15.2924V17.5129H24.0002L23.8525 20.5539H20.6054V29H17.2977Z'
          fill={color}
        />
      </g>
      <circle opacity='0.3' cx='20' cy='20' r='19.6' stroke={color} strokeWidth='0.8' />
      <defs>
        <clipPath id='clip0_9251_208'>
          <rect width='9' height='18' fill={color} transform='translate(15 11)' />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
