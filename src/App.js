import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link, withRouter } from 'react-router-dom';

import Links from './views/Links';
import NotFound from './views/NotFound';
import About from './views/About';
import RandomGif from './views/RandomGif';

class App extends Component {
  render() {
    const { pathname } = this.props.location;
    return (
      <div className="App">
        {
          pathname === '/' ? <h2>Hello, world!</h2> : <h2><Link to="/">Hello, world!</Link></h2>
        }
        <Switch>
          <Route exact path="/" component={Links} />
          <Route exact path="/about" component={About} />
          <Route exact path="/gif" component={RandomGif} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
