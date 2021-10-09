import React, { useState } from 'react';
import styled from 'styled-components';
import { Palette } from '../../ts/colors/colors';
import Name from '../details/Name';
import useCopy from '../../hooks/useCopy';
import View from './View';

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
        <View palette={palette} />
      </Informations>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
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

export default Card;
