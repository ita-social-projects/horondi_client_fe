import React from 'react';
import { createSvgIcon } from '@material-ui/core';

const Search = createSvgIcon(
  <path
    d='M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z'
    stroke='#FEFEFE'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    fill='none'
  />,
  'Search'
);

function SearchIcon(props) {

  const searchInputIcon = props.searchInputIcon;

  return (
    <>
      <Search className={searchInputIcon} data-testid='search-icon' />
    </>
  );
}

export default SearchIcon;
