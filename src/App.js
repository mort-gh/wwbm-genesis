// libraries
import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// services
import route from './routes/routes';

// lazy loaders
const LoadHomePage = lazy(() => import(/* webpackChunkName: "home" */ './modules/home/screens/Home'));
const LoadGamePage = lazy(() => import(/* webpackChunkName: "game" */ './modules/game/containers/Game.container'));
const LoadGameOverPage = lazy(() =>
   import(/* webpackChunkName: "gameover" */ './modules/gameOver/containers/GameOver.container'),
);

function App() {
   return (
      <Suspense fallback={<div>Loading... </div>}>
         <Switch>
            <Route path={route.Home} exact component={LoadHomePage} />
            <Route path={route.Game} component={LoadGamePage} />
            <Route path={route.GameOver} component={LoadGameOverPage} />
            <Redirect to={route.Home} />
         </Switch>
      </Suspense>
   );
}

export default App;
