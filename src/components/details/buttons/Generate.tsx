import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchPalette, getModels, getPaletteLoading } from '../../../slices/paletteSlice';
import { ReactComponent as IconLoad } from '../../../assets/icons/loader.svg';

const Generate: React.FC = () => {
  const dispatch = useAppDispatch();
  const models = useAppSelector(getModels);
  const paletteLoading = useAppSelector(getPaletteLoading);

  return (
    <Wrapper>
      {paletteLoading === 'pending' && <IconLoad />}
      <Button type="button" onClick={() => { if (models.length > 0) dispatch(fetchPalette()); }}>
        Generate
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  color: white;
  background: black;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 0.925rem;
  border: none;
  transition: background-color 0.2s ease-out;
  margin-left: 1rem;

  &:hover {
    background: ${(props) => props.theme.primary};
  }
`;

export default Generate;
