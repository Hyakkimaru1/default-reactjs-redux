import React from 'react';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <>
    <Switch>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
  </>
  );
}

export default App;
