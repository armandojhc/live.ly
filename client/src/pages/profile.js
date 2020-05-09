import React from 'react';
import Feeds from '../components/feedsEvent/index';
import Footer from '../components/footer/index';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import profilepic from '../logo/profilepic.png';
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import ProfileInfo from '../components/profileInfo/profileInfo';
import InfoIcon from '@material-ui/icons/Info';
import img1 from '../img/bike.jpg';
import img2 from '../img/breakfast.jpg';
import img3 from '../img/burgers.jpg';
import img4 from '../img/camera.jpg';

const tileData = [
	{
		img    : { img1 },
		title  : 'Image',
		author : 'author'
	},
	{
		img    : { img2 },
		title  : 'Image',
		author : 'author'
	},
	{
		img    : { img3 },
		title  : 'Image',
		author : 'author'
	},
	{
		img    : { img4 },
		title  : 'Image',
		author : 'author'
	},
	{
		img    : { img3 },
		title  : 'Image',
		author : 'author'
	},
	{
		img    : { img4 },
		title  : 'Image',
		author : 'author'
	}
];

const useStyles = makeStyles((theme) => ({
	root                : {
		// display: 'flex',
		// '& > *': {
		// 	margin: theme.spacing(1),
		// },
		root  : {
			flexGrow : 1
		},
		paper : {
			padding   : theme.spacing(2),
			textAlign : 'center',
			color     : theme.palette.text.secondary
		}
	},
	profileimage1       : {
		float          : 'left',
		width          : 'calc(33.333% - 1rem)',
		display        : 'flex',
		justifyContent : 'center',
		alignItems     : 'center',
		marginRight    : '1rem'
	},

	container           : {
		// maxWidth: '93.5rem',
		margin : '0 auto'
		// padding: '0 2rem',
	},
	large               : {
		width  : theme.spacing(10),
		height : theme.spacing(10)
		// marginRight: '240px',
	},
	profile             : {
		padding   : '5rem 0',
		boxSizing : 'border-box',
		content   : '',
		display   : 'block',
		clear     : 'both'
	},
	profileusername     : {
		display    : 'inline-block',
		fontSize   : '20px',
		color      : 'white',
		fontWeight : '300'
		// float:'left',
	},
	profileusersettings : {
		marginTop : '1.1rem',
		float     : 'left',
		width     : 'calc(66.666% - 2rem)'
	},
	btnedit             : {
		// // float:'left',
		display    : 'inline-block',
		font       : 'inherit',
		// // background: 'none',
		// // border: 'none',
		// // color: 'inherit',
		padding    : '5px',
		cursor     : 'pointer',
		fontSize   : '10px',
		// // lineHeight: '1.8',
		// // border: '0.1rem solid #dbdbdb',
		// // borderRadius: '0.3rem',
		// // padding: '0 2.4rem',
		// // marginLeft: '2rem',
		// fontSize: '1.4rem',
		// lineHeight: '1.8',
		// border: '0.1rem solid #dbdbdb',
		// borderRadius: '0.3rem',
		// padding: '0 2.4rem',
		marginLeft : '1rem'
	},
	statcount           : {
		display    : 'inline-block',
		fontSize   : '14px',
		color      : 'white',
		fontWeight : '300',
		padding    : '0px 15px 0px 0px'
	},
	statcountn          : {
		// fontWeight:'700',
		display  : 'inline-block',
		fontSize : '15px',
		color    : 'white',
		// fontWeight: '300',
		padding  : '0px 2px 0px 0px'
	},
	btnprofilesetting   : {
		display    : 'inline-block',
		font       : 'inherit',
		background : 'none',
		border     : 'none',
		color      : 'white',
		padding    : '0',
		cursor     : 'pointer',
		fontSize   : '2rem',
		marginLeft : '1rem'
	},
	profileimage        : {
		float          : 'left',
		width          : 'calc(33.333% - 1rem)',
		display        : 'flex',
		justifyContent : 'center',
		alignItems     : 'center'
		// marginRight: '0rem',
	},
	profilestats        : {
		// marginTop: '2.3rem',
		float      : 'left',
		// marginTop: 'calc(66.666% - 2rem)',
		display    : 'inline-block',
		fontSize   : '15px',
		lineHeight : '1.5',
		// marginRight: '4rem',
		cursor     : 'pointer'
	},
	profilestatcount    : {
		// fontWeight: '600',
	},
	bio                 : {
		color    : 'white',
		fontSize : '14px'
	},
	root2               : {
		display         : 'flex',
		flexWrap        : 'wrap',
		justifyContent  : 'space-around',
		overflow        : 'hidden',
		backgroundColor : theme.palette.background.paper,
		borderRadius    : '50px'
	},
	gridList            : {
		width  : 500,
		height : 450
	},
	icon                : {
		color : 'rgba(255, 255, 255, 0.54)'
	}
}));

function Profile() {
	const classes = useStyles();
	return (
		<div>
			<ProfileInfo />

			<Container maxWidth="sm">
				<div className={classes.root2}>
					<GridList cellHeight={180} className={classes.gridList}>
						<GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
							<ListSubheader component="div">Lives Posted</ListSubheader>
						</GridListTile>
						{tileData.map((tile) => (
							<GridListTile key={tile.img}>
								<img src={tile.img} alt={tile.title} />
								<GridListTileBar
									title={tile.title}
									subtitle={<span>likes: {tile.author}</span>}
									actionIcon={
										<IconButton
											aria-label={`info about ${tile.title}`}
											className={classes.icon}
										>
											<InfoIcon />
										</IconButton>
									}
								/>
							</GridListTile>
						))}
					</GridList>
				</div>
			</Container>
		</div>
	);
}

export default Profile;
