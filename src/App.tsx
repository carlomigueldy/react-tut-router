import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import NotFoundPage from "./pages/NotFoundPage";
import UnauthorizedPage from "./pages/UnauthorizedPage";

function App() {
  return (
    <>
      {/* parent routes */}
      <Router>
        <Switch>
          <Route component={UnauthorizedPage} path="/unauthorized" />

          <Route component={LoginPage} path="/login" />

          <Route component={LogoutPage} path="/logout" />

          {/* parent route ni ProfilePage */}
          <Route component={HomePage} path="/home" />

          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route component={NotFoundPage} path="**" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
