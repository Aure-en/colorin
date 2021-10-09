import React from 'react';
import styled from 'styled-components';
import Road from '../assets/preview/Road';
import Geometric from '../components/preview/Geometric';

const Preview = () => {
  return (
    <Wrapper>
      <div>Palette</div>
      <Geometric />
      <div>Buttons</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  max-height: 100%;
  padding: 2rem;
`;

export default Preview;
