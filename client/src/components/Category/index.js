/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Category() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Category" variant="outlined" />}
    />
  );
}

const top100Films = [
  { title: 'Hip-Hop' },
  { title: 'R&B' },
  { title: 'Pop' }
];
