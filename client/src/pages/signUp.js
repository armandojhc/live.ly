import React from 'react';
import Regform from '../components/Regform/regform'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TrendingEvents from '../components/trendingEvent/index';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	container: {
		padding: 15
	}
}));

export default function SignUp() {
	const classes = useStyles();
	return (
		<Container maxWidth="md" className={classes.container}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<TrendingEvents />
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<Regform fullWidth />
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
}