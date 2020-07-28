import React from 'react';
import Navbar from './Navbar.jsx';
import Timeline from './Timeline.jsx';
import Suggested from './Suggested.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <React.Fragment>
        <Navbar />
        <Timeline />
        <Suggested />
      </React.Fragment>
    )
  }
}

export default App;