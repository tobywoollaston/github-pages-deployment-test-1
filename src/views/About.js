import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <h3>About Page</h3>
        <h4>101 Ways to Deploy a React Website</h4>
        <iframe 
          title="the video i watched"
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/-THM2R4MJ98" 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    );
  }
}