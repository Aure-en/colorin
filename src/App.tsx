import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from './routes/Details';
import List from './routes/List';
import Copies from './components/copy/Copies';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Details} />
        <Route exact path="/list" component={List} />
      </Switch>
      <Copies />
    </Router>
  );
}

export default App;
