import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route,  Link } from "react-router-dom";
import Users from './components/Users';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';



function App() {
  return (
  
  <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route path="/user/:id" component={User} />
        </Switch>
      </div>
    </Router>

  );
}


export default App;
