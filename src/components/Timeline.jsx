import React from 'react';
import Post from './Post.jsx'

const Timeline = (props) => (
  <div>
    <h4>Timeline</h4>
    {props.posts.map((post, key) => {
      return <Post data={post} key={key}/>
    })}
  </div>

)

export default Timeline;