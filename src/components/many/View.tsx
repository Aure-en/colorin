import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { setPalette } from '../../slices/paletteSlice';
import { Palette } from '../../ts/colors/colors';

interface Props {
  palette: Palette;
}

const View: React.FunctionComponent<Props> = ({ palette }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setPalette(palette));
  };

  return (
    <ViewLink
      to="/"
      $palette={palette}
      onClick={handleClick}
    >
      View
    </ViewLink>
  );
};

const ViewLink = styled(Link)<{
  $palette: Palette
}>`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.925rem;
  color: ${(props) => props.theme.text_neutral};
  align-self: flex-start;

  display: inline-block;
  position: relative;

  &:hover {
    color: ${(props) => props.theme.text_dark};
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      ${(props) => `${props.$palette[0].hex},
        ${props.$palette[1].hex},
        ${props.$palette[2].hex},
        ${props.$palette[3].hex},
        ${props.$palette[4].hex}
      `}
    );
    width: 0%;
    transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  }

  &:hover:after {
    left: 0;
    right: auto;
    width: 100%;
  }
`;

export default View;
