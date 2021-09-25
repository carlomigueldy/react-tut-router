import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router";
import { Link } from "react-router-dom";

const FIVE_SECONDS = 5000;

export default function HomePage() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      // history.push("/logout");

      history.goBack();

      /**
       * push()
       *
       * index 0: LandingPage
       * index 1: HomePage
       * index 2: LogoutPage
       *
       * replace()
       *
       * index 0: LandingPage
       * index 1: HomePage (replace) -> LogoutPage
       */
    }, FIVE_SECONDS);
  }, []);

  return (
    <>
      <h1>Home Page</h1>

      <Link to="/home/profile">To Profile</Link>

      {/* child routes */}
      <Switch>
        <Route path="/home/profile">
          <div>
            <h1>Profile</h1>

            <Link to="/home/profile/photos">See Photos</Link>

            <Switch>
              <Route path="/home/profile/photos">
                <div>
                  <h1>Photos</h1>
                </div>
              </Route>
            </Switch>
          </div>
        </Route>
      </Switch>
    </>
  );
}
