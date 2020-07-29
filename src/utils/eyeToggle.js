import { IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React from 'react';

export function toggleInputType(e, showPass) {
  const input = e.currentTarget.parentElement.previousSibling;
  if (input.type === 'password') {
    input.type = 'text';
    showPass(false);
  } else {
    input.type = 'password';
    showPass(true);
  }
}

export function endAdornment(isVisible, setShowPass) {
  return {
    endAdornment: (
      <InputAdornment position='end'>
        <IconButton
          aria-label='toggle password visibility'
          onClick={(e) => toggleInputType(e, setShowPass)}
        >
          {isVisible ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    )
  };
}
