import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Links extends Component {
  render() {
    return (
      <section>
        <small>Click the links</small>
        <h4><Link to="/about">About Page</Link></h4>
        <h4><Link to="/gif">Random GIF</Link></h4>
      </section>
    );
  }
}