import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './App';
import LandingPage from './components/LandingPage/LandingPage';
import SignUp from './components/SignUp/SignUp';
import SignUpPrefs from './components/SignUpPrefs/SignUpPrefs';
import Profile from './components/Profile/Profile';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LandingPage} />
      <Route path="signup" component={SignUp} />
      <Route path="signup/prefs" component={SignUpPrefs} />
      <Route path="profile" component={Profile} />
    </Route>
  </Router>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);