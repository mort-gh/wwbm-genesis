import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './modules/home/screens/Home';

function App() {
   return (
      <Switch>
         <Route path="/" exact component={Home} />
         <Redirect to="/" />
      </Switch>
   );
}

export default App;
