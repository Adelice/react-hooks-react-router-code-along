import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import About from "./About";
import Home from "./Home";


ReactDOM.render(
<BrowserRouter>
  <Switch>
  
    <Route path="/about">
      <About />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
  </Switch>
  </BrowserRouter>,


document.getElementById("root"));
