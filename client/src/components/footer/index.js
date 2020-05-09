import React from 'react';
import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
	root   : {
		minWidth : 275
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
	}
});

export default function SimpleCard() {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<div>
			<Container>
				<Card className={classes.root}>
					<CardContent>
						<Typography
							className={classes.title}
							color="textSecondary"
							gutterBottom
						>
							Meet the Team
						</Typography>
						<CardActions>
							<Button size="small">
								<a href="https://github.com/armandojhc" target="blank">
									Armando Herrera Canelon
								</a>
							</Button>
							<Button size="small">
								<a href="https://github.com/manuelr14" target="blank">
									Manuel Ramirez
								</a>
							</Button>
							<Button size="small">
								<a href="https://github.com/everetthumphreys" target="blank">
									Everett Humphreys
								</a>
							</Button>
							<Button size="small">
								<a href="https://github.com/rogercerpa" target="blank">
									Roger Cerpa
								</a>
							</Button>
						</CardActions>
					</CardContent>
					<CardActions>
						<Button size="small">
							<a href="https://github.com/armandojhc/live.ly" target="blank">
								Learn More
							</a>
						</Button>
					</CardActions>
				</Card>
			</Container>
		</div>
	);
}
