import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [units, setUnits] = React.useState('');

  const handleChange = (event) => {
    setUnits(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Unidades</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={units}
          label="Unidades"
          onChange={handleChange}
        >
          <MenuItem value={1} selected>1 unidad</MenuItem>
          <MenuItem value={2}>2 unidades</MenuItem>
          <MenuItem value={3}>3 unidades</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
