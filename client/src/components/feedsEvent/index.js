import React, { useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Moment from 'react-moment';
import 'moment-timezone';
import Category from '../Category';
import { positions } from '@material-ui/system';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [artistData, setArtistData] = React.useState([]);
  const [refreshEvents, setRefreshEvents] = React.useState(true);

  useEffect(() => {

    //Get the data from the server
    console.log("Getting data...");
    fetch("/api/event")
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
  // const artistData = [
  //   {
  //     name: 'Ed Sheeran',
  //     date: '5.12.2020',
  //     url: 'https://google.com',
  //     description: 'He is gonna drop some panties.',
  //     eventURL: plant,
  //     avatarURL: 'https://www.placecage.com/200/200'
  //   },
  //   {
  //     name: 'Rihanna',
  //     date: '5.19.2020',
  //     url: 'https://google.com',
  //     description: 'She will sing stuff.',
  //     eventURL: vegetables,
  //     avatarURL: 'https://www.placecage.com/200/200'
  //   },
  //   {
  //     name: 'The Black Keys',
  //     date: '5.14.2020',
  //     url: 'https://google.com',
  //     description: 'Rock show.',
  //     eventURL: star,
  //     avatarURL: 'https://www.placecage.com/200/200'

  //   }
  // ]

  return (
    <div>
      <Category />
      {
      artistData.map((event) => (
        <Card className={classes.root}>
          <CardHeader
            avatar={event.eventOwner && event.eventOwner.avatarURL ?
              <Avatar aria-label="avatar" className={classes.avatar} src={event.eventOwner.avatarURL}>
                R
              </Avatar>
              : null
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={event.name}
            subheader={<Moment format="MM-DD-YYYY">{event.eventDate}</Moment>}
          />
          <CardMedia
            className={classes.media}
            image={event.eventPhotoURL}
            title={event.eventOwner.name}
            event={event.eventLink}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {event.description}
        </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))
    }
    </div>
  );
}
