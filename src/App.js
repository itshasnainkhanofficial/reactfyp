import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Page2 from "./components/Page2";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
function App() {
  return (
    <div>
      <div className="main">
        <Router>
          <Header />

          <Switch>
            
            <Route exact path="/Home" component={Home} />

            <Route exact path="/">
              <Redirect to="/Home" />
            </Route>
            
            <Route exact path="/Page2" component={Page2} />

          </Switch>
        </Router>

      </div>
    </div>
  );
}

export default App;
