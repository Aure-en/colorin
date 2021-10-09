import React from 'react';
import styled from 'styled-components';
import Shape from '../../assets/preview/Leaves';

const Leaves: React.FC = () => (
  <Wrapper>
    <Text>
      <Header>
        <Logo>Colors</Logo>
        <Right>
          <div>Generate</div>
          <div>Explore</div>
        </Right>
      </Header>

      <Main>
        <Heading>
          Explore
          {' '}
          <Secondary>thousands</Secondary>
          {' '}
          of colors to
          {' '}
          <Tertiary>paint</Tertiary>
          {' '}
          your next project
          <Secondary>.</Secondary>
        </Heading>
        <Subheading>
          Create the perfect color scheme, or be inspired by existing ones.
        </Subheading>
      </Main>

      <Button>Explore &#8594;</Button>
    </Text>
    <Shape />
  </Wrapper>
);

export default Leaves;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;
  grid-gap: 5rem;
  padding: 0 3rem;
  align-items: center;
`;

const Text = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 3rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Main = styled.div`
  margin: 3rem 0;
  align-self: center;

  & > p {
    line-height: 2rem;
    max-width: 60%;
  }
`;

const Logo = styled.div`
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.25rem;

  &:before {
    content: "● ";
    color: ${(props) => props.theme.tertiary};
  }
`;

const Right = styled.div`
  display: flex;
  opacity: 0.5;

  & > div:first-child {
    margin-right: 2rem;
  }

  & > div {
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.tertiary};
    }
  }
`;

const Heading = styled.h2`
  font-size: 4rem;
  margin-bottom: 2rem;
  max-width: 80%;
`;

const Subheading = styled.h3`
  color: ${(props) => props.theme.secondary};
`;

const Secondary = styled.span`
  color: ${(props) => props.theme.secondary};
`;

const Tertiary = styled.span`
  color: ${(props) => props.theme.tertiary};
`;

const Button = styled.div`
  display: inline-block;
  padding: 0.75rem 1rem;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  border-radius: 3px;
  cursor: pointer;
  margin: 2rem 0;
  justify-self: start;
  transition: background 0.2s linear;

  &:hover {
    background: ${(props) => props.theme.tertiary};
  }
`;
