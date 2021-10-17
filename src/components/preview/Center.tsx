import React from 'react';
import styled from 'styled-components';
import Shape from '../../assets/preview/Center';

const Center: React.FunctionComponent = () => (
  <Wrapper>
    <Shape />
    <Text>
      <h2>Colorin</h2>
      <div>artworks</div>
    </Text>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  overflow: hidden;
`;

const Text = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;

  & > h2 {
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 300;
    margin-bottom: 0.5rem;
  }

  & > div {
    letter-spacing: 3px;
    font-size: 1.25rem;
    font-weight: 300;
    color: ${(props) => props.theme.tertiary};
  }
`;

export default Center;
