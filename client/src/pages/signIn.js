import React from 'react';
import Trending from '../components/trendingEvent';
import SignInForm from '../components/signIn/index';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme) => ({
	root      : {
		flexGrow : 1
	},
	paper     : {
		padding    : theme.spacing(2),
		textAlign  : 'center',
		color      : 'white',
	},
	container : {
		padding : 15
	},
	large     : {
		width  : theme.spacing(20),
		height : theme.spacing(20)
	}
}));

function SignIn(props) {
	const classes = useStyles();
	const { authUser } = props;
	console.log(authUser);
	{

		return (
			<div>
				<Container maxWidth="md" className={classes.container}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<Trending />
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<SignInForm authUser={authUser} />
						</Paper>
					</Grid>
				</Grid>
				</Container>
			</div>
		);
	}
}

export default SignIn;
