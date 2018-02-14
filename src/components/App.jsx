import React from 'react';
import Nav from './Nav';
import Character from './Character';
import { Switch, Route } from 'react-router-dom';


export default function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={Character} />
      </Switch>
    </div>
  );
}
