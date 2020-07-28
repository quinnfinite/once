import React from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class SugFollower extends React.Component{
  constructor(props){
    super(props);
    // this.classes = useStyles();
    this.state = {
      mutualFollowers: [],
      mutualFollowing: [],
      classes: {},
    }
  }
  componentDidMount(){
    axios.post(`/user/mutual-follows`, {username: 'Quinn', follow: this.props.data._fields[0].properties.username}).then((data) => {
      this.setState({
        mutualFollowing: data.data
      })
      //console.log('Mutual Follows- ', data.data)
    });
    axios.post(`/user/mutual-followers`, {username: 'Quinn', follow: this.props.data._fields[0].properties.username}).then((data) => {
      this.setState({
        mutualFollowers: data.data
      })
      //console.log('Mutual Followers - ', data.data)
    })
  }
  render(){
    return(
      <Paper elevation={3} style={{margin: '10px', padding: '2px'}}>
        <span>{this.props.data._fields[0].properties.username}</span>
        <br/>
        <span>{`followed by: ${this.props.data._fields[1].properties.username}`}</span>
        <br/>
        <span>{this.state.mutualFollowers.length} followers in common</span>
        <br/>
        <span>You follow {this.state.mutualFollowing.length} of the same people</span>
      </Paper>
    )
  }
}

export default SugFollower;

// export default async function SugFollower(props){

//   const mutualCount = await axios.post(`/user/mutual-follows`, {data: { username: 'Quinn', follow: user}}).then((data) => console.log('data - ', data))
//   return (
//   )
// }