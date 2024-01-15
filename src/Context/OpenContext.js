import React from 'react';

export const OpenContext = React.createContext({
  open: false,
  setOpen: () => {},
  desc: '',
  setDesc: () => {},
});
