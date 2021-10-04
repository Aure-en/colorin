import React, { useEffect } from 'react';
import styled from 'styled-components';
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

const Details = () => {
  const dispatch = useDispatch();
  const models = useSelector(getModels);
  const mainPalette = useSelector(getMainPalette);
  const steps: StepsType = useSelector(getSteps);

  useEffect(() => {
    if (models.length > 0) dispatch(fetchPalette());
  }, [models]);

  useEffect(() => {
    dispatch(setSteps());
  }, [mainPalette]);

  return (
    <Wrapper>
      <Steps />
      <Palettes mainPalette={mainPalette} steps={steps} />
      <Preview mainPalette={mainPalette} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  min-height: 100vh;
`;

export default Details;
