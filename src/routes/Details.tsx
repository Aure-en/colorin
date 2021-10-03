import React from 'react';
import styled from 'styled-components';
import Palettes from '../components/details/Palettes';
import Steps from '../components/details/Steps';

const Details = () => (
  <Wrapper>
    <Steps />
    <Palettes />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default Details;
