import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Palette } from '../../ts/colors/colors';
import Name from '../../components/details/Name';
import useCopy from '../../hooks/useCopy';

interface Props {
  palette: Palette;
}

const Card: React.FC<Props> = ({ palette }: Props) => {
  const [currentColor, setCurrentColor] = useState(palette[0]);
  const { copy } = useCopy();

  return (
    <Wrapper>
      <Colors>
        {palette.map((color) => (
          <Color
            $color={color.hex}
            onMouseEnter={() => setCurrentColor(color)}
            onClick={(e) => {
              copy(e.pageX, e.pageY, color);
            }}
          />
        ))}
      </Colors>
      <Informations>
        <Name color={currentColor} />
        <View
          to="/"
          $palette={palette}
          onClick={() => {
            console.log('ok');
          }}
        >
          View
        </View>
      </Informations>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

const Colors = styled.div`
  display: flex;
  flex: 1;
`;

const Informations = styled.div`
  display: flex;
`;

const Color = styled.button<{
  $color: string;
}>`
  flex: 1;
  height: 100%;
  background: ${(props) => props.$color};
  transition: all 0.2s ease-out;

  &:hover {
    flex: 3;
  }
`;

const View = styled(Link)<{
  $palette: Palette
}>`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.925rem;
  color: ${(props) => props.theme.neutral_silent};
  align-self: flex-start;

  display: inline-block;
  position: relative;

  &:hover {
    color: ${(props) => props.theme.neutral_text};
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

export default Card;
