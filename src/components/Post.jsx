import React from 'react';
import Paper from '@material-ui/core/Paper';
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
      <div>{props.data._fields[0].properties.author}</div>
      <div>{props.data._fields[0].properties.text}</div>
      <div>Icon Icon Icon</div>
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