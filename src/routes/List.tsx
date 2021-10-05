import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { getPalettesFromAPI, getArePalettesLoading } from '../slices/paletteSlice';
import Cards from '../components/many/Cards';

const List: React.FC = () => {
  const palettes = useAppSelector(getPalettesFromAPI);
  const arePalettesLoading = useAppSelector(getArePalettesLoading);

  if (!arePalettesLoading) {
    return (
      <Wrapper>
        <Cards palettes={palettes} />
      </Wrapper>
    );
  }

  return <></>;
};

const Wrapper = styled.main`
  display: flex;
  min-height: calc(100vh - 5rem);
`;

export default List;
