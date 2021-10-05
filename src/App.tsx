import React, { useState, useEffect, ReactElement } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from './app/hooks';
import {
  getMainPalette,
  fetchModels,
  fetchPalette,
  fetchPalettes,
  getPaletteLoading,
  setSteps,
  getModels,
} from './slices/paletteSlice';
import Details from './routes/Details';
import List from './routes/List';
import Copies from './components/copy/Copies';
import Header from './components/header/Header';
import GlobalStyles from './style/globalStyles';

const App: React.FC = (): ReactElement => {
  const models = useAppSelector(getModels);
  const mainPalette = useAppSelector(getMainPalette);
  const paletteLoading = useAppSelector(getPaletteLoading);
  const [theme, setTheme] = useState({
    primary: '#000',
    secondary: '#000',
    tertiary: '#000',
    quaternary: '#000',
    quinary: '#000',
    text: '#fff',
    text_dark: '#000',
    text_neutral: '#2c2c2c',
    text_bright: '#fff',
  });
  const dispatch = useAppDispatch();

  // Load models
  useEffect(() => {
    dispatch(fetchModels());
  }, []);

  // Load palettes
  useEffect(() => {
    if (models.length > 0) dispatch(fetchPalette());
    if (models.length > 0) dispatch(fetchPalettes());
  }, [models]);

  // Get steps
  useEffect(() => {
    if (paletteLoading === 'fulfilled') {
      dispatch(setSteps());
    }
  }, [paletteLoading]);

  // Setup theme
  useEffect(() => {
    if (mainPalette.length >= 5) {
      // Determine text color depending on how bright the primary color is.
      const text = mainPalette[0].hsl[2] > 50 ? theme.text_dark : theme.text_bright;

      setTheme((prev) => ({
        ...prev,
        primary: mainPalette[0].hex,
        secondary: mainPalette[1].hex,
        tertiary: mainPalette[2].hex,
        quaternary: mainPalette[3].hex,
        quinary: mainPalette[4].hex,
        text,
      }));
    }
  }, [mainPalette]);

  return (
    <Router>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header />
          <Switch>
            <Route exact path="/" component={Details} />
            <Route exact path="/list" component={List} />
          </Switch>
        </Wrapper>
      </ThemeProvider>
      <Copies />
    </Router>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default App;
