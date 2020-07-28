import React from 'react';
import Navbar from './Navbar.jsx';
import Timeline from './Timeline.jsx';
import Suggested from './Suggested.jsx';

const App = (props) => (
  <React.Fragment>
    <Navbar />
    <Timeline />
    <Suggested />
  </React.Fragment>
)

export default App;