import './App.scss';
import './assets/scss/index.scss';
import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './views/HomePage/HomePage';
import ExerciseOne from './views/ExerciseOne/ExerciseOne';
import ExerciseTwo from './views/ExerciseTwo/ExerciseTwo'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/exercise1" component={ExerciseOne} />
          <Route exact path="/exercise2" component={ExerciseTwo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;