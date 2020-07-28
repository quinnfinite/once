import React from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary
  }
}));

export default function Post(props) {
  const classes = useStyles();
  return(
  <React.Fragment>
    <Paper className={classes.paper}>
      <Avatar>
        <AccountCircleIcon />
      </Avatar>
      <div>
        {props.data._fields[0].properties.author}
      </div>
      <div>{props.data._fields[0].properties.text}</div>
      <div>
        <ThumbDownIcon/>
        <ThumbUpIcon/>
        <ChatIcon/>
      </div>
    </Paper>

  </React.Fragment>

  )
}


// const Post = (props) => (
//   const classes = useStyles();
//   <React.Fragment>
//     <Paper className={classes.paper} spacing={5}>
//       <div>{props.data._fields[0].properties.author}</div>
//       <div>{props.data._fields[0].properties.text}</div>
//     </Paper>

//   </React.Fragment>
// )

// export default Post;