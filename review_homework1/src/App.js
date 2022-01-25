import React from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import Detail from "./Detail";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/detail/:day" exact>
        <Detail />
      </Route>
    </div>
  );
}

export default App;
