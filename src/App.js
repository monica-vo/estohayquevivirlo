// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Link is your replacement for anchor tags.
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  // Link,
  Route,
  Switch,
} from 'react-router-dom';

import Main from './components/Main'
import { Home } from './components/Home'

function App() {


  return (
    <div>
      <Router >
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/main" component={Main} />
        </Switch>
      </Router>
    </div>
  );

  // );
}

export default App;
