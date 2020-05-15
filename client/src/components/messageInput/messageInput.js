

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({

    margin: {
        margin: theme.spacing(1),
    }


    
    
}));



export default function InputAdornments(props) {
    const classes = useStyles();



return(

    <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Message</InputLabel>
        <OutlinedInput
            id="outlined-adornment-amount"
           
            onChange={props.onChange}
            startAdornment={<InputAdornment position="start">></InputAdornment>}
            labelWidth={60}
        />
    </FormControl>
)
}
