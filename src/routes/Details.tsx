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
        <Center>
          <Palettes mainPalette={mainPalette} steps={steps} />
          <Buttons>
            <Generate />
            <Reset />
          </Buttons>
        </Center>
        <Preview mainPalette={mainPalette} />
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 3rem;
  min-height: 100vh;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem 3rem 2rem 2rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;

  & > button {
    margin-left: 1rem;
  }

`;

export default Details;
