import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Feeds from '../components/feedsEvent/index';
import TrendingEvents from '../components/trendingEvent/index';
import FutureEvents from '../components/futureEvent/index';
import Container from '@material-ui/core/Container';
import Footer from '../components/side-footer';

const useStyles = makeStyles((theme) => ({
	root      : {
		flexGrow : 1
	},
	paper     : {
		padding   : theme.spacing(3),
		textAlign : 'center',
		color     : theme.palette.text.secondary
	},
	container : {
		padding : 15
	}
}));

export default function CenteredGrid() {
	const classes = useStyles();
	{
		return (
			<div>
				<Container maxWidth="lg" className={classes.container}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Paper className={classes.paper}>
								<TrendingEvents />
							</Paper>
						</Grid>
						<Grid item xs={9}>
							<Paper className={classes.paper}>
								<Feeds />
							</Paper>
						</Grid>
						<Grid item xs={3}>
							<Paper className={classes.paper}>
								<FutureEvents />
							</Paper>
							<Paper>
								<Footer />
							</Paper>
						</Grid>
					</Grid>
				</Container>
			</div>
		);
	}
}
