import React, { ReactElement, useEffect } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
  getStepsNumber, incrementSteps, decrementSteps, setSteps,
} from '../../../slices/paletteSlice';
import { ReactComponent as IconPlus } from '../../../assets/icons/plus.svg';
import { ReactComponent as IconMinus } from '../../../assets/icons/minus.svg';

const Buttons: React.FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const stepsNumber = useAppSelector(getStepsNumber);

  useEffect(() => {
    dispatch(setSteps());
  }, [stepsNumber]);

  return (
    <Wrapper>
      <Button type="button" onClick={() => dispatch(incrementSteps())}>
        <IconPlus />
      </Button>
      {stepsNumber}
      <Button type="button" onClick={() => dispatch(decrementSteps())}>
        <IconMinus />
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  grid-row: 1 / span 1;

  @media all and (min-width: 576px) {
    flex-direction: column;
    grid-row: initial;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0.5rem 0;
  transition: color 0.2s ease-out;
  color: ${(props) => props.theme.text_neutral};

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

export default Buttons;
