import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import navItems from "./Nav/navItems";
import Nav from "./Nav";
import store from './Redux/store'


function App() {
  const Routes = () => {
    return navItems.map(({ path, component }) => (
      <Route exact key={path} path={path}>
        {component}
      </Route>
    ));
  };

  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Nav />
        <Switch>
            <Routes />
        </Switch>
      </Router>
    </div>
    </Provider>

  );
}

export default App;
