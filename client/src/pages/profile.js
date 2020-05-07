import React from 'react';
import Feeds from '../components/feedsEvent/index';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';

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

function Profile() {
	const classes = useStyles();
	{
		return (
			<div className={classes.root}>
				<Container maxWidth="md" className={classes.container}>
					<Grid container spacing={3} justify="center">
						<Paper className={classes.paper}>
							<Grid container spacing={8}>
								<Grid item>
									<ButtonBase className={classes.image}>
										<Avatar src="/broken-image.jpg" className={classes.large} />
									</ButtonBase>
									<Typography gutterBottom variant="subtitle1">
										Roger Cerpa
									</Typography>
								</Grid>
								<Grid item xs={12} sm container>
									<Grid item xs container direction="row" spacing={2}>
										<Grid item xs={3}>
											<Typography gutterBottom variant="subtitle1">
												Live.ly Events
											</Typography>
										</Grid>
										<Grid item xs={3}>
											<Typography variant="body2" gutterBottom>
												Following
											</Typography>
										</Grid>
										<Grid item xs={3}>
											<Typography variant="body2">Followers</Typography>
										</Grid>
										<Grid item>
											<Typography variant="body2" style={{ cursor: 'pointer' }}>
												Remove
											</Typography>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Paper>

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
