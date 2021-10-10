import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  fetchPalette,
  getModels,
  getPaletteLoading,
} from '../../../slices/paletteSlice';
import { ReactComponent as IconLoad } from '../../../assets/icons/loader.svg';
import { ReactComponent as IconReset } from '../../../assets/icons/reset.svg';

interface Props {
  icon?: boolean;
}

const Generate: React.FC<Props> = ({ icon }) => {
  const dispatch = useAppDispatch();
  const models = useAppSelector(getModels);
  const paletteLoading = useAppSelector(getPaletteLoading);

  return (
    <Wrapper>
      {paletteLoading === 'pending' && !icon && <IconLoad />}
      <Button
        type="button"
        onClick={() => {
          if (models.length > 0) dispatch(fetchPalette());
        }}
        $rotate={paletteLoading === 'pending' && icon}
        $icon={icon}
      >
        {icon ? <IconReset /> : 'Generate'}
      </Button>
    </Wrapper>
  );
};

Generate.propTypes = {
  icon: PropTypes.bool,
};

Generate.defaultProps = {
  icon: false,
};

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button<{
  $rotate?: boolean;
  $icon?: boolean;
}>`
  color: ${(props) => (props.$icon ? props.theme.text_dark : props.theme.text_bright)};
  background: ${(props) => (!props.$icon && props.theme.text_dark)};
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 0.925rem;
  border: none;
  transition: background-color 0.2s ease-out;
  margin-left: 1rem;
  animation: ${(props) => props.$rotate
    && css`
      ${rotation} 2s infinite linear
    `};

  &:hover {
    background: ${(props) => !props.$icon && props.theme.primary};
    color: ${(props) => props.$icon && props.theme.primary};
  }
`;

export default Generate;
