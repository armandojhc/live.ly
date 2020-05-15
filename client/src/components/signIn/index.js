import React, { useState }from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Paper from '@material-ui/core/Paper';
import API from '../../utils/API.js';

const useStyles = makeStyles((theme) => ({
	root      : {
		flexGrow : 1
	},
	container : {
		padding : 50
	},
	paper     : {
		padding    : theme.spacing(2),
		textAlign  : 'center',
		color      : 'white',
		background : 'transparent'
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
		authUser({email: email, password: password});
	}

	return (
		<div>
			<form className={classes.root} noValidate autoComplete="off">
				<Container
					maxWidth="sm"
					className={classes.container}
					alignItems="center"
				>
					<Paper className={classes.paper}>
						<Grid container spacing={3} item direction="column">
							<TextField
								className={classes.margin}
								id="input-with-icon-textfield"
								label="email"
								value={email}
								onChange={emailChange}
								InputProps={{
									startAdornment : (
										<InputAdornment position="start">
											<AccountCircle />
										</InputAdornment>
									)
								}}
							/>
							<TextField
								className={classes.margin}
								id="input-with-icon-textfield"
								label="password"
								onChange={passwordChange}
								value={password}
								InputProps={{
									startAdornment : (
										<InputAdornment position="start">
											<AccountCircle />
										</InputAdornment>
									)
								}}
							/>
							<Button onClick={authenticate} variant="contained">Sign In</Button>
						</Grid>
					</Paper>
				</Container>
			</form>
		</div>
	);
}
