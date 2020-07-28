import React from 'react';
import axios from 'axios';
import Navbar from './Navbar.jsx';
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
        <Timeline />
        <Suggested suggested={this.state.suggested}/>
      </React.Fragment>
    )
  }
}

export default App;