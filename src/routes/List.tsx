import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getModelsLoading, getPalettesFromAPI, fetchPalettes } from '../slices/paletteSlice';
import Cards from '../components/many/Cards';
import Generate from '../components/many/buttons/Generate';

const List: React.FC = () => {
  const dispatch = useAppDispatch();
  const modelsLoading = useAppSelector(getModelsLoading);
  const palettes = useAppSelector(getPalettesFromAPI);

  // Load palettes
  useEffect(() => {
    if (modelsLoading === 'fulfilled' && palettes.length === 0) dispatch(fetchPalettes());
  }, [modelsLoading]);

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
