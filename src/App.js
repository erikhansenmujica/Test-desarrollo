import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Modelos from "./Modelos";
import Ficha from "./Ficha";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/modelos" component={() => <Modelos />} />
        <Route exact path="/ficha" component={Ficha} />
        <Route exact path="/ficha/:name" component={Ficha} />
        <Redirect to="/modelos"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
