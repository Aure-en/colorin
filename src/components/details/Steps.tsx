import React, { ReactElement, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  getStepsNumber, incrementSteps, decrementSteps, setSteps,
} from '../../slices/paletteSlice';

const Steps: React.FC = (): ReactElement => {
  const dispatch = useDispatch();
  const stepsNumber = useSelector(getStepsNumber);

  useEffect(() => {
    dispatch(setSteps());
  }, [stepsNumber]);

  return (
    <Wrapper>
      <button type="button" onClick={() => dispatch(incrementSteps())}>+</button>
      {stepsNumber}
      <button type="button" onClick={() => dispatch(decrementSteps())}>-</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  margin: 0 1rem;

  & > button {
    border: none;
    background: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

`;

export default Steps;
