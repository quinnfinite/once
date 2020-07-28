import React, { useState } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SendSharpIcon from '@material-ui/icons/SendSharp';

export default function Create(props) {
  const [create, hoverCreate] = useState('disabled');
  const [message, changeMessage] = useState('');
  const createPost = () => {
    axios.post('/post/create', {username: 'Quinn', text: message}).then(() => props.refresh())
    changeMessage('')
  }
  return (
      <React.Fragment>
        <Grid container justify="center" alignItems='flex-end' spacing={3} style={{margin: '10px'}}>
          <Grid item sm={10}>
            <TextField label="What's on your
            mind?" value={message} fullWidth={true} onChange={e => changeMessage(e.target.value)}/>
          </Grid>
          <Grid item sm={2}>
            <SendSharpIcon color={create} onMouseEnter={() => hoverCreate('primary')} onMouseLeave={() => hoverCreate('disabled')} onClick={createPost}/>
          </Grid>

        </Grid>
      </React.Fragment>


  )
}