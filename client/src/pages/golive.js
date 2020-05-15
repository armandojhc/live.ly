import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Webcam from '../components/webcam/webcam'
import profilepic from '../logo/profilepic.png';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import armandopic from '../logo/armando.png';
import everettpic from '../logo/everett.png';
import rogerpic from'../logo/roger.png';
import Button from '@material-ui/core/Button';
import Messageinput from '../components/messageInput/messageInput';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 'auto',
    alignContent:'center',
    // float:'none',
    display:'block',
    justifyContent:'center',
    alignContent:'center',
  },
  header:{
      fontSize:"40px"
  },

  media: {
    alignContent:'center',
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
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  root2: {
    width: '100%',
    maxWidth: 'automatic',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));





const mList =[ ];

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  
  const messageState = {
    message: ' ',
    
  }

  const [ values, setValues] = React.useState(messageState);

  function sendMessage(){
    mList.push(values.message);
    console.log(mList);
    handleExpandClick();
  

  }
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values.message)
};


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  return (

<Container >
    <Card className={classes.root}>
      <CardHeader 
        avatar={
          <Avatar aria-label="profile-pic" src= {profilepic} className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Going Live! Don't be Shy"
        subheader="September 14, 2016"
      />


<Webcam
      className={classes.media}/>


      <CardContent>


<div>
<Messageinput

onChange={handleChange('message')}
/>

<Button variant="outlined" size="small" color="primary" onClick={sendMessage} className={classes.margin}>
          Send
          
        </Button>
</div>




      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
          <List className={classes.root2}>

          {mList.map((message,index)=>
          <ListItem key = {message} alignItems="flex-start">
          <ListItemAvatar>
          <Avatar alt="profile-pic" src={profilepic} />
        </ListItemAvatar>
       
        <ListItemText
          primary="Manuel"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {/* alternative (uncoment if want to use) */}
              </Typography>
              {message}
            </React.Fragment>
          }
        />
         </ListItem>

          )}
      <ListItem alignItems="flex-start">
          <ListItemAvatar>
          <Avatar alt="profile-pic" src={armandopic} />
        </ListItemAvatar>
       
        <ListItemText
          primary="Armando"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {/* alternative (uncoment if want to use) */}
              </Typography>
              {"I love youuuuuu"}
            </React.Fragment>
          }
        />
         </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="profile-pic" src={everettpic} />
        </ListItemAvatar>
        <ListItemText
          primary="Everett"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              {/* alternative */}
              </Typography>
              {"Hey everyone !"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="roger" src={rogerpic} />
        </ListItemAvatar>
        <ListItemText
          primary="Roger"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               {/* alternative */}
              </Typography>
              {'Wao! Fascinante '}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        </CardContent>
      </Collapse>
    </Card>
    </Container>
  );
}
