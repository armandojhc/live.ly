import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		flexWrap: 'nowrap',
		// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
		transform: 'translateZ(0)',
	},
	title: {
		color: theme.palette.primary.white,
	},
	titleBar: {
		background:
			'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
	},
}));

export default function SingleLineGridList() {
	const classes = useStyles();
	const [artistData, setArtistData] = React.useState([]);
	const [refreshEvents, setRefreshEvents] = React.useState(true);

	useEffect(() => {

		//Get the data from the server
		console.log("Getting data...");
		fetch("/api/events")
		.then(res => res.json())
		.then(json => {
		  console.log(json);
		  setRefreshEvents(false);
		  setArtistData(json);
		})
		.catch(err => {
		  console.log(err);
		})
	  }, [refreshEvents])

	return (
		<div className={classes.root}>
			<GridList className={classes.gridList} cols={2.5}>
				{
				artistData.map((event) => (
					<GridListTile key={event.gifURL}>
						<img src={event.gifURL} alt={event.eventOwner.name} />
						<GridListTileBar
							title={event.eventOwner.name}
							classes={{
								root: classes.titleBar,
								title: classes.title,
							}}
							actionIcon={
								<IconButton aria-label={`star ${event.eventOwner.name}`}>
									<StarBorderIcon className={classes.title} />
								</IconButton>
							}
						/>
					</GridListTile>
				))}
			</GridList>
		</div>
	);
}
