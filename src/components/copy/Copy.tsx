import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
`;

export default Copy;
