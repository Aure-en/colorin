import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

interface Props {
  select: (number: number) => void;
  current: number;
  total: number;
}

const Buttons: React.FC<Props> = ({ select, total, current }: Props) => (
  <Wrapper>
    {Array.from(Array(total).keys()).map((number: number) => (
      <Button
        type="button"
        onClick={() => select(number + 1)}
        $current={current === number + 1}
      >
        {number + 1}
      </Button>
    ))}
  </Wrapper>
);

Buttons.propTypes = {
  select: PropTypes.func.isRequired,
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const Button = styled.button<{
  $current: boolean,
}>`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  transition: color 0.2s linear, transform 0.2s linear;
  opacity: ${(props) => (props.$current ? 1 : 0.5)};

  &:hover {
    color: ${(props) => props.theme.tertiary};
    transform: scale(1.1);
    opacity: 1;
  }
`;

export default Buttons;
