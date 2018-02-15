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
      <style global jsx>{`
          button {
            height: 40px;
            width: 200px;
            font-size: 1.3em;
            border-radius: 15px;
            border: 2.12px solid black;
            box-shadow: 2px 2px 2px grey;
            background-color: #f9b62f;
            color: white;
            outline: none;

          }
          button:hover {
            cursor: pointer;
          }
          button:active {
            transform: scale(0.75);
            outline: none;
          }
          body {
            font-family: Helvetica;
            background-color: #ffe399;
          }
      `}</style>
    </div>
  );
}
