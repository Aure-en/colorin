import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../app/hooks";
import { getMainPalette } from "../slices/paletteSlice";
import Geometric from "../components/preview/Geometric";
import Palette from "../components/details/Palette";

const Preview = () => {
  const mainPalette = useAppSelector(getMainPalette);

  return (
    <Wrapper>
      <Palette palette={mainPalette} main direction="vertical" />
      <Geometric />
      <div>Buttons</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 10rem 1fr auto;
  max-height: 100%;
  padding: 2rem;
`;

export default Preview;
