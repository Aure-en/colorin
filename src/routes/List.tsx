import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { getPalettesFromAPI, getPalettesLoading } from '../slices/paletteSlice';
import Cards from '../components/many/Cards';
import Generate from '../components/many/buttons/Generate';

const List: React.FC = () => {
  const palettes = useAppSelector(getPalettesFromAPI);

  return (
    <Wrapper>
      <Cards palettes={palettes} />
      <Generate />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: grid;
  grid-template-rows: 1fr min-content;
  padding: 3rem;
  flex: 1;
`;

export default List;
