import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from './routes/Details';
import List from './routes/List';
import Copies from './components/copy/Copies';
import { fetchModels } from './slices/paletteSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchModels());
  }, []);

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
