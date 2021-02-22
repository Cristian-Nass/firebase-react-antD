import React from 'react';
import './App.scss';
import { ListOfUsers } from './components/ListUsers';
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route  path="/list-of-users" component={ListOfUsers} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
