import React from 'react';
import styled from 'styled-components';
import Shape from '../../assets/preview/Triangles';

const Triangle: React.FC = () => (
  <Wrapper>
    <Text>
      <Header>
        <Logo>Notes</Logo>
        <Right>
          <div>Your Present</div>
          <div>Our Project</div>
        </Right>
      </Header>

      <Main>
        <Heading>Welcome to Notes<Accent>.</Accent></Heading>
        <Subheading>Free up your mental space</Subheading>
        <p>
          Regain clarity and calmness by getting all those tasks out of your head
          and onto your to-do list. Don't worry, we'll make it all fit <Accent>together.</Accent>
        </p>
      </Main>

      <Button>
        Organize your life &#8594;
      </Button>
    </Text>
    <Shape />
  </Wrapper>
);

export default Triangle;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  overflow: hidden;
`;

const Text = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 0 1rem;

  @media all and (min-width: 800px) {
    padding: 0 3rem;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media all and (min-width: 1000px) {
    flex-direction: row;
  }
`;

const Main = styled.div`
  margin: 1rem 0;
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
    content: "▲";
    color: ${(props) => props.theme.tertiary};
  }
`;

const Right = styled.div`
  display: flex;
  opacity: 0.5;
  transition: background 0.2s linear;

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
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subheading = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.secondary};

  &:after {
    content: "";
    display: block;
    height: 3px;
    width: 2rem;
    background: ${(props) => props.theme.tertiary};
    margin: 2rem 0;
  }
`;

const Accent = styled.span`
  color: ${(props) => props.theme.secondary};
`;

const Button = styled.div`
  display: inline-block;
  padding: 0.75rem 1rem;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  border-radius: 3px;
  cursor: pointer;
  margin: 1rem 0;
  justify-self: start;
  transition: background 0.2s linear;

  &:hover {
    background: ${(props) => props.theme.secondary};
  }

  @media all and (min-width: 1000px) {
    margin: 2rem 0;
  }
`;
