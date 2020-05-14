import React, { useState, ChangeEvent } from "react";
import API from "../../utils/API";
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
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
    // needs
    const [value, setValue] = React.useState('fan');
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    // Every field in the form needs to have an on- chnage function define as well as a corresponding hook. So when we go post data 
//  The hooks need to be written so that every time the field is updated the hook is also updated
// Main issue is that the way the data is givin to the server side. 
//  

    const handleChange = (event) => {
        setValue(event.target.value);
      };

    function submitUser() {
        API.saveUser({
            name: name,
            email: email
        }).then(res => {
            saveUser(res.data)
            console.log(res.data);
        }).catch(err => console.log(err));
    }

    function handleNameChange(event) {
        setName(event.target.value);
        //console.log(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
        //console.log(event.target.value);
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
            <TextField fullWidth margin="normal" value={name} id="name" onChange={handleNameChange} label="Full Name" variant="outlined" />
            <TextField fullWidth margin="normal" value={email} onChange={handleEmailChange} id="email" label="Email Address" variant="outlined" />
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