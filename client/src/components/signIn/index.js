import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Paper from '@material-ui/core/Paper';

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
		background : 'white'
	}
}));

export default function FormPropsTextFields() {
	const classes = useStyles();

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
								label="email or username"
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
								InputProps={{
									startAdornment : (
										<InputAdornment position="start">
											<AccountCircle />
										</InputAdornment>
									)
								}}
							/>
							<Button variant="contained">Sign In</Button>
						</Grid>
					</Paper>
				</Container>
			</form>
		</div>
	);
}
