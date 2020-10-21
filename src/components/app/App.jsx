import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    
} from 'react-router-dom';

import List from '../list/List';
import Detail from '../detail/Detail'

export default class App extends Component {



render() {
  
return (
  <>
  <div className="app">

    <Router>
     <h1>HEY!  ITS RICK AND MORTY!</h1>

   
        <Switch>
             <Route 
                exact path="/list" component = {List}>
                  </Route>
             <Route 
                exact path="/detail/:id" component = {Detail}>
                  </Route>
                
        </Switch>
    </Router>
  </div>
</>
  );
  }

}


