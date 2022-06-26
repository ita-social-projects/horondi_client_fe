import React from 'react';
import { createSvgIcon } from '@material-ui/core';

const Clear = createSvgIcon(
    <path
        d='M12,11.2928932 L16.1464466,7.14644661 C16.3417088,6.95118446 16.6582912,6.95118446 16.8535534,7.14644661 C17.0488155,7.34170876 17.0488155,7.65829124 16.8535534,7.85355339 L12.7071068,12 L16.8535534,16.1464466 C17.0488155,16.3417088 17.0488155,16.6582912 16.8535534,16.8535534 C16.6582912,17.0488155 16.3417088,17.0488155 16.1464466,16.8535534 L12,12.7071068 L7.85355339,16.8535534 C7.65829124,17.0488155 7.34170876,17.0488155 7.14644661,16.8535534 C6.95118446,16.6582912 6.95118446,16.3417088 7.14644661,16.1464466 L11.2928932,12 L7.14644661,7.85355339 C6.95118446,7.65829124 6.95118446,7.34170876 7.14644661,7.14644661 C7.34170876,6.95118446 7.65829124,6.95118446 7.85355339,7.14644661 L12,11.2928932 Z'
        stroke='#FEFEFE'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
    />,
    'Clear'
);

const ClearIcon = (props) => {   

    const clearInputIcon = props.clearInputIcon;
    const clearIconBlock = props.clearIconBlock;

    const clearSearchInput = () => {
        props.setSearchValue('');
    }
    
    return (
             <div className={clearIconBlock} onClick={clearSearchInput} >
                <Clear className={clearInputIcon} data-testid='clear-icon' />
             </div>
    );
}

export default ClearIcon;
