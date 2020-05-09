import React from 'react';
import Trending from '../components/trendingEvent';
import SignInForm from '../components/signIn/index';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root      : {
		flexGrow : 1
	},
	paper     : {
		padding    : theme.spacing(2),
		textAlign  : 'center',
		color      : 'white',
		background : 'transparent'
	},
	container : {
		padding : 15
	},
	large     : {
		width  : theme.spacing(20),
		height : theme.spacing(20)
	}
}));

function SignIn() {
	const classes = useStyles();
	{
		return (
			<div>
				<Container maxWidth="md" className={classes.container}>
					<Trending />
					<SignInForm />
				</Container>
			</div>
		);
	}
}

export default SignIn;
