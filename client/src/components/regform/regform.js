import React, { useState, ChangeEvent } from "react";
import API from "../../utils/API";
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core//TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        margin: 2
      }
}));

export default function Regform() {
    const classes = useStyles();
    const [user, saveUser] = useState([]);
    const [value, setValue] = React.useState('fan');


    const handleChange = (event) => {
        setValue(event.target.value);
      };

    function submitUser() {
        API.saveUser.then(res => {
            saveUser(res.data)
            console.log(res.data);
        }).catch(err => console.log(err));
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <FormControl className={classes.root}>
                <FormLabel component="legend">Registration Type</FormLabel>
                <RadioGroup aria-label="type" name="type" value={value} onChange={handleChange} >
                    <FormControlLabel value="fan" control={<Radio />} label="Fan" />
                    <FormControlLabel value="artist" control={<Radio />} label="Artist" />
                </RadioGroup>
            </FormControl>
            <TextField fullWidth margin="normal" id="name" label="Full Name" variant="outlined" />
            <TextField fullWidth margin="normal" id="email" label="Email Address" variant="outlined" />
            <TextField fullWidth margin="normal" id="password" type="password" label="Password" variant="outlined" />
            <TextField fullWidth margin="normal" id="avatar" label="Avatar URL" variant="outlined" />
            <TextField fullWidth margin="normal" id="facebook" label="Facebook URL" variant="outlined" />
            <TextField fullWidth margin="normal" id="instagram" label="Instagram URL" variant="outlined" />
            <TextField fullWidth margin="normal" id="twitter" label="Twitter URL" variant="outlined" />
            <Button onClick={() => submitUser()} variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
}