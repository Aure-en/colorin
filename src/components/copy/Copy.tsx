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
`;

export default Copy;
