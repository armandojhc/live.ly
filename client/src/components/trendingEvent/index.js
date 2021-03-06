import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import './index.css';
import Moment from 'moment';

const useStyles = makeStyles((theme) => ({
	root     : {
		display         : 'flex',
		flexWrap        : 'wrap',
		justifyContent  : 'space-around',
		overflow        : 'hidden',
		backgroundColor : theme.palette.background.paper
	},
	gridList : {
		flexWrap  : 'nowrap',
		// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
		transform : 'translateZ(0)'
	},
	title    : {
		color : theme.palette.primary.white
	},
	titleBar : {
		background :
			'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
	}
}));

export default function SingleLineGridList() {
	const classes = useStyles();
	const [ artistData, setArtistData ] = React.useState([]);
	const [ refreshEvents, setRefreshEvents ] = React.useState(true);

	// const [ liveEvent, setLiveEvent ] = React.useState();

	useEffect(
		() => {
			//Get the data from the server

			fetch('/api/event')
				.then((res) => res.json())
				.then((json) => {
					console.log(json);
					setRefreshEvents(false);
					setArtistData(json);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		[ refreshEvents ]
	);
	// artistData.filter((data) => {
	// 	const trending = data.eventDate;
	// 	const currentDate = Moment();
	// 	const eventDate = Moment(trending);

	// 	if (currentDate.isSame(eventDate, 'day')) {
	// 		setLiveEvent();
	// 	} else console.log('no event live today');
	// });

	// console.log(liveEvent);

	return (
		<div className={classes.root}>
			<GridList className={classes.gridList} cols={2.5}>
				{artistData.map((event) => (
					<GridListTile key={event.gifURL}>
						<img src={event.gifURL} alt={event.eventOwner.name} />

						<GridListTileBar
							title={event.eventOwner.name}
							classes={{
								root  : classes.titleBar,
								title : classes.title
							}}
							actionIcon={
								<IconButton
									aria-label={`star ${event.eventOwner.name}`}
									className="iconStyling"
								>
									<LiveTvIcon className="liveIcon" />
								</IconButton>
							}
						/>
					</GridListTile>
				))}
			</GridList>
		</div>
	);
}
