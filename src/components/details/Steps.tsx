import React, { ReactElement, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  getStepsNumber, incrementSteps, decrementSteps, setSteps,
} from '../../slices/paletteSlice';
import { ReactComponent as IconPlus } from '../../assets/icons/plus.svg';
import { ReactComponent as IconMinus } from '../../assets/icons/minus.svg';

const Steps: React.FC = (): ReactElement => {
  const dispatch = useDispatch();
  const stepsNumber = useSelector(getStepsNumber);

  useEffect(() => {
    dispatch(setSteps());
  }, [stepsNumber]);

  return (
    <Wrapper>
      <button type="button" onClick={() => dispatch(incrementSteps())}>
        <IconPlus />
      </button>
      {stepsNumber}
      <button type="button" onClick={() => dispatch(decrementSteps())}>
        <IconMinus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    font-size: 1.5rem;
    cursor: pointer;
    margin: 0.5rem 0;
    transition: color 0.2s ease-out;

    &:hover {
      color: ${(props) => props.theme.primary};
    }
  }
`;

export default Steps;
