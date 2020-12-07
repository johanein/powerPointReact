import React, { memo } from 'react'
import { Route} from "react-router-dom";

import Home from './Components/Home'
import Edit from './Components/EditPage'

const routes = memo(()=>{
    return (
      <>
        <Route exact path={"/editOrAdd"}>
        <Edit />
      </Route>
        <Route exact path={"/"}>
        <Home />
      </Route>
      </>
        );
})

  
  export default routes;
  
