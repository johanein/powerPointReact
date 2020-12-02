import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import navItems from "./Nav/navItems";
import Nav from "./Nav";

function App() {
  const Routes = () => {
    return navItems.map(({ path, component }) => (
      <Route exact key={path} path={path}>
        {component}
      </Route>
    ));
  };

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
            <Routes />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
