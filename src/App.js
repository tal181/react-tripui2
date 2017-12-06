import React, { Component } from 'react';
import Register from './Register';
import Calendar from './Calendar';
import { Switch, Route } from 'react-router-dom'
export default class App extends Component {

  render() {
    return (
        <Switch>
            <Route exact path='/' component={Register}/>
            <Route path='/calendar' component={Calendar}/>
          </Switch>

    );
  }
}


