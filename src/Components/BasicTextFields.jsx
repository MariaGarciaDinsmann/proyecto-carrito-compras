import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  TextField: {
    backgroundColor: "#fff",
    borderRadius: "3px",
  }
}))


export default function BasicTextFields({name, label, funcion, helperText }) {
  const classes = useStyles();

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '-webkit-fill-available' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic"
        name={name}
        label={label}
        variant="filled"        
        className={classes.TextField}
        onBlur={funcion}
        helperText={helperText}
      />
    </Box>
  );
}