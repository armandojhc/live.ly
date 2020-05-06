import React from 'react';
import Feeds from '../components/feedsEvent/index';
import Footer from '../components/footer/index';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
	root  : {
		flexGrow : 1
	},
	paper : {
		padding   : theme.spacing(2),
		textAlign : 'center',
		color     : theme.palette.text.secondary
	}
}));

function Profile() {
	const classes = useStyles();
	{
		return (
			<div>
				<Container maxWidth="md">
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Paper className={classes.paper}>
								<Feeds />
							</Paper>
						</Grid>
					</Grid>
				</Container>
			</div>
		);
	}
}

export default Profile;
