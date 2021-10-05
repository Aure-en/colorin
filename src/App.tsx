import React, { useState, useEffect, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from './app/hooks';
import {
  getMainPalette,
  fetchModels,
  fetchPalette,
  fetchPalettes,
  getIsPaletteLoading,
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
  const isPaletteLoading = useAppSelector(getIsPaletteLoading);
  const [theme, setTheme] = useState({
    primary: '#000',
    secondary: '#000',
    tertiary: '#000',
    quaternary: '#000',
    quinary: '#000',
    text: '#fff',
    neutral_text: '#000',
    neutral_silent: '#2c2c2c',
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
    if (!isPaletteLoading) {
      dispatch(setSteps());
    }
  }, [isPaletteLoading]);

  // Setup theme
  useEffect(() => {
    if (mainPalette.length >= 5) {
      // Determine text color depending on how bright the primary color is.
      const text = mainPalette[0].hsl[2] > 50 ? '#000' : '#fff';

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
        <Header />
        <Switch>
          <Route exact path="/" component={Details} />
          <Route exact path="/list" component={List} />
        </Switch>
      </ThemeProvider>
      <Copies />
    </Router>
  );
};

export default App;
