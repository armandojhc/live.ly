import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			backgroundColor: theme.palette.background.paper,
		},
		title: {
			fontSize: 14
		}
	})
);

const artistData = [
	{
		name: 'Ed Sheeran',
		date: '5.12.2020',
		url: 'https://google.com',
	},
	{
		name: 'Rihanna',
		date: '5.19.2020',
		url: 'https://google.com',
	},
	{
		name: 'The Black Keys',
		date: '5.14.2020',
		url: 'https://google.com',
	}
]

export default function OutlinedCard() {
	const classes = useStyles();

	return (
		<div>{
			artistData.map((artist, i) => (
				<Card key={i} className={classes.root} variant="outlined" mb={2}>
					<CardContent>
						<List className={classes.root} aria-label="upcoming events">
							<ListItem button>
								<ListItemText primary={artist.name} />
							</ListItem>
							<Divider />
							<ListItem button>
								<ListItemText primary={artist.date} />
							</ListItem>
							<Divider />
							<ListItem button>
								<ListItemText primary="View Event" />
							</ListItem>
						</List>
					</CardContent>
				</Card>
			))
		}
		</div>
	);
}