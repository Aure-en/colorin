import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

interface Props {
  x: number,
  y: number,
}

const Copy: React.FC<Props> = ({ x, y }: Props): ReactElement => (
  <Message $x={x} $y={y}>
    Copied
  </Message>
);

Copy.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

const animation = keyframes`
  0% {
    transform: translate(-50%, 50%);
    opacity: 1;
  }

  10% {
    transform: translate(-50%, 40%);
  }

  50% {
    transform: translate(-50%, -300%);
    opacity: 0;
  }

  100% {
    transform: translate(-50%, -300%);
    opacity: 0;
  }
`;

const Message = styled.div<{
  $x: number,
  $y: number,
}>`
  position: absolute;
  top: ${(props) => props.$y}px;
  left: ${(props) => props.$x}px;
  background: #fff;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  font-size: 0.875rem;
  animation: ${animation} 2s ease-in-out;
  transform: translateX(-50%);
`;

export default Copy;
