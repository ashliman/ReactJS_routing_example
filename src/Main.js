import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';

function Main() {
  return (
    <div>
      <switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </switch>
    </div>
  );
}

export default Main;
