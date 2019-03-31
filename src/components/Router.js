import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import InputCard from "./InputCard";
import NotFound from "./NotFound";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={InputCard} />
        <Route path="/store/:storeId" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
