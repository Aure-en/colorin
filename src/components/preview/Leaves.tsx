import React from 'react';
import styled from 'styled-components';
import Shape from '../../assets/preview/Leaves';

const Leaves: React.FunctionComponent = () => (
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
  overflow: hidden;
  grid-gap: 1rem;
  align-items: center;
  grid-template-columns: 2fr 1fr;

  @media all and (min-width: 1235px) {
    grid-gap: 5rem;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 3rem;
  }
`;

const Text = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;

  @media all and (min-width: 900px) {
    padding: 3rem;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media all and (min-width: 900px) {
    flex-direction: row;
  }
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
  font-size: 2rem;
  margin-bottom: 2rem;
  max-width: 80%;

  @media all and (min-width: 1360px) {
    font-size: 4rem;
  }
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
