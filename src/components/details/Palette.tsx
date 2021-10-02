import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchPalette } from '../../slices/paletteSlice';
import Color from '../../ts/color';

const Palette = () => {
  const dispatch = useDispatch();
  const paletteFromAPI = useSelector((state: any) => state.palette?.paletteFromAPI);

  useEffect(() => {
    dispatch(fetchPalette());
  }, []);

  useEffect(() => {
    console.log('PALETTE', paletteFromAPI);
  }, [paletteFromAPI]);

  return (
    <>
      {paletteFromAPI?.length > 0 && paletteFromAPI.map((color: Color) => <ColorComponent key={`${color[0]}-${color[1]}-${color[2]}`} $color={color} />)}
    </>
  );
};

Palette.propTypes = {

};

interface ColorProps {
  $color: number[],
}

const ColorComponent = styled.div<ColorProps>`
  width: 100px;
  height: 100px;
  background: ${(props) => `rgb(${props.$color[0]}, ${props.$color[1]}, ${props.$color[2]})`};
`;

export default Palette;
