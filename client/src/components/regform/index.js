import React, { useState } from "react";
import { withRouter } from "react-router-dom";
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

function Regform(props) {
    const classes = useStyles();
    const initialState = {
        role: "0",
        name: '',
        email: '',
        password: '',
        avatarURL: ''
    };
    const [formData, setFormData] = useState(initialState);

    const handleChange = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        const fieldName = event.target.name;
        const value = event.target.value;
        console.log(value, typeof value);
        setFormData(prevState => {
            let newState = { ...prevState };
            newState[fieldName] = value;
            return newState;
        });
    };

    function removeEmptyProps(obj) {
        const newObj = { ...obj };
        for (var propName in obj) { 
          if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "") {
            delete newObj[propName];
          }
        }
        return newObj;
      }

    function submitUser() {
        const userForm = removeEmptyProps(formData);
        console.log(userForm);
        API.saveUser(userForm)
        .then(res => {
            setFormData(initialState);
            props.history.push("/");
        }).catch(err => console.log(err));
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <FormControl className={classes.root}>
                <FormLabel component="legend">Registration Type</FormLabel>
                <RadioGroup aria-label="type" name="role" value={formData.role} onChange={handleChange} >
                    <FormControlLabel value={"0"} control={<Radio />} label="Fan" />
                    <FormControlLabel value={"1"} control={<Radio />} label="Artist" />
                </RadioGroup>
            </FormControl>
            <TextField
                fullWidth={true}
                margin={"normal"}
                id={"name"}
                name={"name"}
                label={"Full Name"}
                variant={"outlined"}
                onChange={handleChange}
                value={formData.name} />
            <TextField
                fullWidth={true}
                margin={"normal"}
                id={"email"}
                name={"email"}
                label={"Email Address"}
                variant={"outlined"}
                onChange={handleChange}
                value={formData.email} />
            <TextField
                fullWidth={true}
                margin={"normal"}
                id={"password"}
                type={"password"}
                name={"password"}
                label={"Password"}
                variant={"outlined"}
                onChange={handleChange}
                value={formData.password} />
            <TextField
                fullWidth={true}
                margin={"normal"}
                id={"avatar"}
                name={"avatarURL"}
                label={"Avatar URL"}
                variant={"outlined"}
                onChange={handleChange}
                value={formData.avatarURL} />
            <TextField
                fullWidth={true}
                margin={"normal"}
                id={"facebook"}
                name={"facebook"}
                label={"Facebook URL"}
                variant={"outlined"}
                onChange={handleChange}
                value={formData.facebook}
                style={formData.regType !== 1 ? { display: "none" } : {}} />
            <TextField
                fullWidth={true}
                margin={"normal"}
                id={"instagram"}
                name={"instagram"}
                label={"Instagram URL"}
                variant={"outlined"}
                onChange={handleChange}
                value={formData.instagram}
                style={formData.regType !== 1 ? { display: "none" } : {}} />
            <TextField
                fullWidth={true}
                margin={"normal"}
                id={"twitter"}
                name={"twitter"}
                label={"Twitter URL"}
                variant={"outlined"}
                onChange={handleChange}
                value={formData.twitter}
                style={formData.regType !== 1 ? { display: "none" } : {}} />
            <Button onClick={() => submitUser()} variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
}

export default withRouter(Regform);
