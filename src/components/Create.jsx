import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SendSharpIcon from '@material-ui/icons/SendSharp';

export default function Create() {
  const [create, hoverCreate] = useState('disabled');
  const [message, changeMessage] = useState('');
  return (
      <React.Fragment>
        <Grid container justify="center" alignItems='flex-end' spacing={3} style={{margin: '10px'}}>
          <Grid item sm={10}>
            <TextField label="What's on your
            mind?" value={message} fullWidth={true}/>
          </Grid>
          <Grid item sm={2}>
            <SendSharpIcon color={create} onMouseEnter={() => hoverCreate('primary')} onMouseLeave={() => hoverCreate('disabled')}/>
          </Grid>

        </Grid>
      </React.Fragment>


  )
}