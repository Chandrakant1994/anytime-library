import React, { Component } from 'react';
import UserView from './containers/UserView/UserView';
import AdminView from './containers/AdminView/AdminView';
import Auth from './containers/Auth/Auth';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


class App extends Component {

  state = {
  }

  render() {
    return (
      <div className="App">

        {/* <Link to="/admin"> AdminPage </Link>  
          <Link to="/user"> UserPage </Link>  */}
        <Router>
          <div>
            <Link to="/admin">AdminPage</Link>
            <Link to="/">Home</Link>
            <Switch>
            <Route path='/admin' render={() => <AdminView />} />
            <Route path='/user' component={UserView} />
            <Route path='/' component={Auth} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
