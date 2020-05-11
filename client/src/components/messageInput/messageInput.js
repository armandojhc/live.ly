

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({

    margin: {
        margin: theme.spacing(1),
    },
}));



export default function InputAdornments() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        message: '',
      
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };


return(

    <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Message</InputLabel>
        <OutlinedInput
            id="outlined-adornment-amount"
            value={values.amount}
            onChange={handleChange('message')}
            startAdornment={<InputAdornment position="start">></InputAdornment>}
            labelWidth={60}
        />
    </FormControl>
)
}
