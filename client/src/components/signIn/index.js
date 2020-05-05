import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	root : {
		'& .MuiTextField-root' : {
			margin : theme.spacing(1),
			width  : '25ch'
		}
	}
}));

export default function FormPropsTextFields() {
	const classes = useStyles();

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<div>
				<TextField
					required
					id="standard-required"
					label="Required"
					defaultValue="Hello World"
				/>
				<TextField
					id="standard-password-input"
					label="Password"
					type="password"
					autoComplete="current-password"
				/>
				<Button variant="outlined">Sign In</Button>
			</div>
		</form>
	);
}
