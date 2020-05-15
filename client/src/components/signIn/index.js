import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	container: {
		padding: 50
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: 'white',
	}
}));

export default function FormPropsTextFields(props) {
	const classes = useStyles();
	const [password, setPassword] = useState("test1234");
	const [email, setEmail] = useState("rdear4@gmail.com");
	const { authUser } = props;

	console.log(authUser);
	function emailChange(event) {
		setEmail(event.target.value);
	}

	function passwordChange(event) {
		setPassword(event.target.value);
	}

	function authenticate() {
		//console.log(email, password);
		authUser({ email: email, password: password });
	}

	return (
		<div>
			<form className={classes.root} noValidate autoComplete="off">
				<TextField
					className={classes.margin}
					id="input-with-icon-textfield"
					label="email"
					value={email}
					variant={"outlined"}
					onChange={emailChange}
					fullWidth={true}
					margin={"normal"}
				/>
				<TextField
					className={classes.margin}
					id="input-with-icon-textfield"
					label="password"
					variant={"outlined"}
					onChange={passwordChange}
					value={password}
					type={"password"}
					fullWidth={true}
					margin={"normal"}
				/>
				<Button onClick={authenticate} variant="contained" color="primary">Sign In</Button>
			</form>
		</div>
	);
}
