import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchPalette,
  getMainPalette,
  getSteps,
  setSteps,
  getModels,
} from '../slices/paletteSlice';
import Palettes from '../components/details/Palettes';
import Steps from '../components/details/Steps';
import { Steps as StepsType } from '../ts/colors/colors';
import Preview from '../assets/Preview';
import Generate from '../components/details/buttons/Generate';
import Reset from '../components/details/buttons/Reset';

const Details = () => {
  const [theme, setTheme] = useState({
    primary: '#000',
    secondary: '#000',
    tertiary: '#000',
    quaternary: '#000',
    quinary: '#000',
  });
  const dispatch = useDispatch();
  const models = useSelector(getModels);
  const mainPalette = useSelector(getMainPalette);
  const steps: StepsType = useSelector(getSteps);

  // Load models
  useEffect(() => {
    if (models.length > 0) dispatch(fetchPalette());
  }, [models]);

  // Get steps
  useEffect(() => {
    dispatch(setSteps());
  }, [mainPalette]);

  // Setup theme
  useEffect(() => {
    if (mainPalette.length >= 5) {
      setTheme({
        primary: mainPalette[0].hex,
        secondary: mainPalette[1].hex,
        tertiary: mainPalette[2].hex,
        quaternary: mainPalette[3].hex,
        quinary: mainPalette[4].hex,
      });
    }
  }, [mainPalette]);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Steps />
        <Palettes mainPalette={mainPalette} steps={steps} />
        <Buttons>
          <Generate />
          <Reset />
        </Buttons>
        <Preview mainPalette={mainPalette} />
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: min-content 2.5fr auto;
  grid-template-rows: 1fr min-content;
  grid-column-gap: 2.5rem;
  grid-row-gap: 1rem;
  align-items: center;
  padding: 2rem;
  min-height: calc(100vh - 6rem);
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-row: 2;
  grid-column: 2;
  align-self: start;

  & > button {
    margin-left: 1rem;
  }

`;

export default Details;
