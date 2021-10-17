import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useAppDispatch } from '../../../app/hooks';
import { reset } from '../../../slices/paletteSlice';
import { ReactComponent as IconEraser } from '../../../assets/icons/eraser.svg';

interface Props {
  icon?: boolean;
}

const Reset: React.FunctionComponent<Props> = ({ icon }) => {
  const dispatch = useAppDispatch();

  return (
    <Button type="button" onClick={() => { dispatch(reset()); }} $icon={icon}>
      {icon ? <IconEraser /> : 'Reset' }
    </Button>
  );
};

Reset.propTypes = {
  icon: PropTypes.bool,
};

Reset.defaultProps = {
  icon: false,
};

const Button = styled.button<{
  $icon?: boolean,
}>`
  background: transparent;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 0.925rem;
  border: ${(props) => !props.$icon && `1px solid ${props.theme.text_dark}`};
  transition: all 0.2s ease-out;

  &:hover {
    color: ${(props) => props.theme.primary};
    border: ${(props) => !props.$icon && `1px solid ${props.theme.primary}`}
  }
`;

export default Reset;
