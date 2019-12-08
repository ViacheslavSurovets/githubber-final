import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import GitHubberState from "./context/git/gitState";
import AlertState from "./context/alert/AlertState";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import setAuthToken from './utils/setAuthToken';



import "./App.css";

if(sessionStorage.token){
  setAuthToken(sessionStorage.token)
}

function App() {
  return (
    <AuthState>
      <ContactState>
        <GitHubberState>
          <AlertState>
            <Router>
              <div className="App">
                <Navbar />
                <Alert />
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={props => (
                      <Fragment>
                        <Search />
                        <Users />
                      </Fragment>
                    )}
                  />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route component={NotFound} />
                  )}/>
                </Switch>
              </div>
            </Router>
          </AlertState>
        </GitHubberState>
      </ContactState>
    </AuthState>
  );
}

export default App;
