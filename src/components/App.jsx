import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar.jsx';
import Create from './Create.jsx';
import Timeline from './Timeline.jsx';
import Suggested from './Suggested.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      suggested: []
    }
  }
  componentDidMount(){
    this.getPosts();
    this.getSuggested();
  }
  getPosts(){
    axios.get('/post/all').then((data)=> {
      this.setState({
        posts: data.data
      })
    })
  }
  getSuggested(){
    var username = 'Quinn';
    axios.get(`/user/suggested/${username}`)
    .then((data) => {
      console.log('Suggested - ', data)
      this.setState({
        suggested: data.data
      })
    })
    .catch(err => console.log('Could not find suggested follows'))
  }
  render(){
    return (
      <React.Fragment>
        <Navbar />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={9}>
              <Create />
              <Timeline posts={this.state.posts}/>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Suggested suggested={this.state.suggested}/>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

export default App;