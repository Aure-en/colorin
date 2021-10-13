import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { ReactSortable } from 'react-sortablejs';
import PropTypes from 'prop-types';
import { useAppDispatch } from '../../../app/hooks';
import Color from './Color';
import { MainPalette } from '../../../ts/colors/colors';
import { setPalette } from '../../../slices/paletteSlice';

type Direction = 'vertical' | 'horizontal';

interface Props {
  palette: MainPalette;
  direction?: Direction;
}

const Palette: React.FC<Props> = ({
  palette,
  direction,
}: Props): ReactElement => {
  const dispatch = useAppDispatch();

  return (
    <Wrapper
      $direction={direction}
      list={palette}
      setList={(newPalette: any) => dispatch(setPalette(newPalette))}
    >
      {palette.map((color, index) => (
        <Color key={color.id} index={index} color={color} />
      ))}
    </Wrapper>
  );
};

Palette.propTypes = {
  palette: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      hex: PropTypes.string.isRequired,
      rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
};

Palette.defaultProps = {
  direction: 'horizontal',
};

const Wrapper = styled(ReactSortable)<{
  $direction?: Direction;
}>`
  display: flex;
  grid-gap: 1rem;
  width: 100%;
  flex: 1;

  & > * {
    flex: 1;
  }

  @media all and (min-width: 600px) {
    flex-direction: ${(props) => (props.$direction === 'vertical' ? 'column' : 'row')};
  }
`;

export default Palette;
