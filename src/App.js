// libraries
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// services
import route from './routes/routes';

// modules
import Home from './modules/home/screens/Home';
import Game from './modules/game/containers/Game.container';
import GameOver from './modules/gameOver/containers/GameOver.container';
import Panel from './modules/panel/screens/Panel';

function App() {
   return (
      <Switch>
         <Route path={route.Home} exact component={Home} />
         <Route path={route.Game} component={Game} />
         <Route path={route.GameOver} component={GameOver} />
         <Route path={route.Panel} component={Panel} />
         <Redirect to={route.Home} />
      </Switch>
   );
}

export default App;
