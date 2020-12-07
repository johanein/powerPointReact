import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEdit,faPlus,faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import "./App.css";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import Nav from "./Nav";
import store from './Redux/store'
import Routes from './routes'

library.add(fab, faEdit, faPlus, faArrowLeft)

const App =()=> {  

  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Nav />
        <div className="mainPage">
        <Switch>
            <Routes />
        </Switch>
        </div>
      </Router>
    </div>
    </Provider>

  );
}

export default App;
