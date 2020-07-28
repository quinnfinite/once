import React from 'react';
import SugFollower from './SugFollower.jsx';

const Suggested = (props) => (
  <React.Fragment>
    <h3>Consider Following</h3>
    {props.suggested.map((sug , key) =>{
      return <SugFollower data={sug} key={key} />
    })}
  </React.Fragment>
)

export default Suggested;