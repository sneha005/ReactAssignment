import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './index.scss';

const Login = lazy(() => import("./components/login/login.js"));
const Dashboard = lazy(() => import("./components/dashboard/Dashboard.js"));

const Routes = props => {
  const [authenticated, setAuthentication] = useState(false);

  useEffect(() => {
    if (localStorage) {
      const authKey = localStorage.getItem("authKey");
      authKey && setAuthentication(true)
    }
  }, []);

  return (
    <div id="app">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" render={props => <Login setAuthentication={setAuthentication} {...props} />} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default Routes;
