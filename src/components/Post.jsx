import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  item: {
    padding: theme.spacing(3)
  }
}));

export default function Post(props) {
  const classes = useStyles();
  const [thumbsUp, setThumbsUp] = useState('disabled');
  const [thumbsDown, setThumbsDown] = useState('disabled');
  const [comment, toggleComment] = useState('disabled');
  return(
  <React.Fragment>
    <Grid container spacing={1}>
      <Grid item xs={12}>
      <Paper variant="outlined" className={classes.paper}>

        <Grid item xs={12} className={classes.item}>
          {props.data._fields[0].properties.text}
        </Grid>
        <Grid container justify="space-between">
          <div>
            <ThumbDownIcon color={thumbsDown} onClick={() => {
              setThumbsUp('disabled')
              thumbsDown ==='disabled' ? setThumbsDown('secondary') : setThumbsDown('disabled');

              }}/>
            <ThumbUpIcon color={thumbsUp} onClick={() => {
              setThumbsDown('disabled');
              thumbsUp ==='disabled' ? setThumbsUp('primary') : setThumbsUp('disabled');

              }}/>
          </div>
          <ChatIcon color={comment} onClick={() => {
            comment==='disabled' ? toggleComment('primary') : toggleComment('disabled')
          }}/>
        </Grid>
      </Paper>
      </Grid>
    </Grid>

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