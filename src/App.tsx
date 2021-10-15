import React, { useEffect, ReactElement } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAppDispatch } from './app/hooks';
import {
  fetchModels,
  setPalette,
} from './slices/paletteSlice';
import Details from './routes/Shades';
import List from './routes/List';
import Preview from './routes/Preview';
import Theme from './components/settings/Theme';
import Copies from './components/copy/Copies';
import Header from './components/header/Header';
import GlobalStyles from './style/globalStyles';
import palettes from './data/palettes';

const App: React.FC = (): ReactElement => {
  const dispatch = useAppDispatch();

  // Setup
  useEffect(() => {
    // Select the first palette among featured ones.
    const randomPalette = palettes[Math.floor(Math.random() * palettes.length)];
    dispatch(setPalette(randomPalette));

    // Load models
    dispatch(fetchModels());
  }, []);

  return (
    <Router>
      <GlobalStyles />
      <Theme>
        <Wrapper>
          <Header />
          <Switch>
            <Route exact path="/" component={Preview} />
            <Route exact path="/shades" component={Details} />
            <Route exact path="/list" component={List} />
          </Switch>
        </Wrapper>
      </Theme>
      <Copies />
    </Router>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media all and (min-width: 600px) {
    height: 100vh;
  }
`;

export default App;
