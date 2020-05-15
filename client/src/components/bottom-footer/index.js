import React from 'react';
import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
	root   : {
		minWidth   : 275,
		background : 'white'
	},
	bullet : {
		display   : 'inline-block',
		margin    : '0 2px',
		transform : 'scale(0.8)'
	},
	title  : {
		fontSize : 14
	},
	pos    : {
		marginBottom : 12
	},
	link   : {
		textDecoration : 'none',
		fontSize       : 8
	}
});

export default function SimpleCard() {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<div>
			<Grid item xs={12}>
				<Card className={classes.root} item xs={3}>
					<CardContent>
						<Typography
							className={classes.title}
							color="textSecondary"
							gutterBottom
						>
							Meet the Team
						</Typography>
						<Typography
							className={classes.title}
							color="textSecondary"
							gutterBottom
						>
							<Button size="small" className={classes.link}>
								<a href="https://github.com/armandojhc" target="blank">
									Armando H.
								</a>
							</Button>
							<Button size="small" className={classes.link}>
								<a href="https://github.com/manuelr14" target="blank">
									Manuel R.
								</a>
							</Button>
							<Button size="small" className={classes.link}>
								<a href="https://github.com/everetthumphreys" target="blank">
									Everett H.
								</a>
							</Button>
							<Button size="small" className={classes.link}>
								<a href="https://github.com/rogercerpa" target="blank">
									Roger C.
								</a>
							</Button>
						</Typography>
					</CardContent>
					<CardContent
						className={classes.title}
						color="textSecondary"
						gutterBottom
					>
						<Typography>
							<a href="https://github.com/armandojhc/live.ly" target="blank">
								Learn More
							</a>
							<GitHubIcon />
						</Typography>
					</CardContent>
					<Typography
						className={classes.title}
						color="textSecondary"
						gutterBottom
					>
						{' '}
						&copy; {new Date().getFullYear()} Live.ly Inc | All Rights Reserved
					</Typography>
				</Card>
			</Grid>
		</div>
	);
}
