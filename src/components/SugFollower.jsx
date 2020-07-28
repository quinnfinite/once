import React from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

class SugFollower extends React.Component{
  constructor(props){
    super(props);
    // this.classes = useStyles();
    this.state = {
      mutualCount: 0
    }
  }
  componentDidMount(){
    axios.post(`/user/mutual-follows`, {username: 'Quinn', follow: this.props.data._fields[0].properties.username}).then((data) => console.log('Mutual Follows- ', data))
    axios.post(`/user/mutual-followers`, {username: 'Quinn', follow: this.props.data._fields[0].properties.username}).then((data) => console.log('Mutual Followers - ', data))
  }
  render(){
    return(
      <Paper>
        {this.props.data._fields[0].properties.username}
        {`followed by: ${this.props.data._fields[1].properties.username}`}
        {console.log(this.props)}
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