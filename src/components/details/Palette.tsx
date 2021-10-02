import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Palette = () => {
  const [palette, setPalette] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch('http://colormind.io/api/', {
        method: 'POST',
        body: JSON.stringify({
          model: 'default',
        }),
      });
      const json = await data.json();
      console.log(json);
      setPalette(json.result);
    })();
  }, []);

  return (
    <>
      {palette.length > 0 && palette.map((color: number[]) => <Color $color={color} />)}
    </>
  );
};

Palette.propTypes = {

};

interface ColorProps {
  $color: number[],
}

const Color = styled.div<ColorProps>`
  width: 100px;
  height: 100px;
  background: ${(props) => `rgb(${props.$color[0]}, ${props.$color[1]}, ${props.$color[2]})`};
`;

export default Palette;
