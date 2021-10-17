import React, { ReactElement } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Color as ColorType } from '../../../ts/colors/colors';
import useCopy from '../../../hooks/useCopy';
import Name from './Name';

interface Props {
  color: ColorType;
}

const Step : React.FunctionComponent<Props> = ({ color }: Props): ReactElement => {
  const { copy } = useCopy();

  return (
    <Card>
      <Background $color={color.hex} onClick={(e) => { copy(e.pageX, e.pageY, color); }} />
      <Name color={color} />
    </Card>
  );
};

Step.propTypes = {
  color: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  }).isRequired,
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const Background = styled.button<{
  $color: string;
}>`
  position: relative;
  background: ${(props) => props.$color};
  min-height: 3.5rem;
  max-height: 3.5rem;
  flex: 1;
  border: none;
  cursor: pointer;

  &:focus {
    outline: 2px solid transparent;
  }
`;

export default Step;
