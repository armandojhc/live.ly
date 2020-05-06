import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import bike from '../../img/bike.jpg';
import breakfast from '../../img/breakfast.jpg';
import burgers from '../../img/burgers.jpg';
import camera from '../../img/camera.jpg';
import hats from '../../img/hats.jpg';
import honey from '../../img/honey.jpg';
import morning from '../../img/morning.jpg';
import mushroom from '../../img//mushroom.jpg';
import olive from '../../img/olive.jpg';
import plant from '../../img/plant.jpg';
import star from '../../img/star.jpg';
import vegetables from '../../img/vegetables.jpg';

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

const tileData = [
	{
		img: bike,
		title: 'Travis Scott',
		author: 'author',
	},
	{
		img: breakfast,
		title: 'Post Malone',
		author: 'author',
	},
	{
		img: burgers,
		title: 'Kanye West',
		author: 'author',
	},
	{
		img: camera,
		title: 'Iggy Azalea',
		author: 'author',
	},
	{
		img: hats,
		title: 'Childish Gambino',
		author: 'author',
	},
	{
		img: honey,
		title: 'Lil Peep',
		author: 'author',
	},
	{
		img: morning,
		title: 'G Eazy',
		author: 'author',
	},
	{
		img: mushroom,
		title: 'Wiz Khalifa',
		author: 'author',
	},
	{
		img: olive,
		title: 'Lil Uzi Vert',
		author: 'author',
	},
	{
		img: plant,
		title: 'Nicki Minaj',
		author: 'author',
	},
	{
		img: hats,
		title: 'Juice WRLD',
		author: 'author',
	},
	{
		img: star,
		title: 'Drake',
		author: 'author',
	},
	{
		img: vegetables,
		title: 'The Weeknd',
		author: 'author',
	}
];

export default function SingleLineGridList() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<GridList className={classes.gridList} cols={2.5}>
				{tileData.map((tile) => (
					<GridListTile key={tile.img}>
						<img src={tile.img} alt={tile.title} />
						<GridListTileBar
							title={tile.title}
							classes={{
								root: classes.titleBar,
								title: classes.title,
							}}
							actionIcon={
								<IconButton aria-label={`star ${tile.title}`}>
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
