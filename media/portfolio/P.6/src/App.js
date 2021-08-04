import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/a-propos" exact component={About}></Route>
        <Route path="/news" exact component={News}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
