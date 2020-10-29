import React, { Component } from 'react';
import { Switch, Route, Redirect, Router } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Login';
import history from './history';
import candidate from './Candidate';
import ExpiredEmailLink from './ExpiredEmailLink';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/candidate" component={candidate} />
            <Route exact path="/invalidurllink" component={ExpiredEmailLink} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
