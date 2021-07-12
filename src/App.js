import React from 'react'
import './App.css';
import Home from './Pages';
import Contact from './Pages/Contact'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/contact' component={Contact} exact />
      </Switch>

    </Router>
  );
}

export default App;
