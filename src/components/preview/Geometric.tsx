import React from 'react';
import styled from 'styled-components';
import Shape from '../../assets/preview/Geometric';

const Geometric = () => (
  <Wrapper>
    <Shape />
    <Text>
      <Heading>
        <span>The Cover</span>
        {' '}
        Geometric
      </Heading>
      <Details>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, animi quisquam. Delectus unde accusamus, ut asperiores modi cumque enim aspernatur quasi. Dolor aliquid.</Details>
      <Number>#01</Number>
    </Text>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  overflow: hidden;
`;

const Text = styled.div`
  max-width: 50%;
  padding: 3rem;
  text-align: center;
`;

const Heading = styled.h2`
  position: relative;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 300;
  color: ${(props) => props.theme.primary};
  letter-spacing: 3px;

  & > span {
    font-weight: bold;
    color: ${(props) => props.theme.text_dark};
  }

  &:after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 100%;
    left: 0;
    top: 0.75rem;
    z-index: -1;
    height: 90%;
    background: ${(props) => props.theme.quinary};
    opacity: 0.5;
  }
`;

const Details = styled.div`
  margin: 2rem;
`;

const Number = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

export default Geometric;
