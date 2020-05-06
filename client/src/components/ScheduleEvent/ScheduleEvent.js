import React, { useState } from "reacte_modules/react";
import API from "../utils/API";
import { makeStyles } from '@material-ui/core/styles-ui/core/styles';
import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField/core/TextField';
import Button from '@material-ui/core/Button-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Form() {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const classes = useStyles();
    
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    function submitEvent() {
        API.saveEvent.then(res => {
            saveUser(res.data)
            console.log(res.data);
        }).catch(err => console.log(err));
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Performance Date"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
            <TextField id="showgif" label="Show Gif URL" variant="outlined" />
            <TextField id="showimage" type="Show Image URL" label="Password" variant="outlined" />
            <TextField id="platform" label="Link to Performance" variant="outlined" />
            <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Category"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={hip-hop}>Hip-Hop</MenuItem>
          <MenuItem value={country}>Country</MenuItem>
          <MenuItem value={folk}>Folk</MenuItem>
        </Select>
      </FormControl>
            <Button onClick={() => submitEvent()} variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
}