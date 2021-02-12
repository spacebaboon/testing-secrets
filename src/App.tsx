import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AccessForm } from './AccessForm';
import './App.css';
import { Home } from './Home';
import { UserTable } from './UserTable';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/login' exact component={AccessForm}/>
        <Route path='/team' exact component={UserTable}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
