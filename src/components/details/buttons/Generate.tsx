import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPalette, getModels } from '../../../slices/paletteSlice';

const Generate = () => {
  const dispatch = useDispatch();
  const models = useSelector(getModels);

  return (
    <Button type="button" onClick={() => { if (models.length > 0) dispatch(fetchPalette()); }}>
      Generate
    </Button>
  );
};

const Button = styled.button`
  color: white;
  background: black;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 0.925rem;
  border: none;
  transition: background-color 0.2s ease-out;

  &:hover {
    background: ${(props) => props.theme.primary};
  }
`;

export default Generate;
