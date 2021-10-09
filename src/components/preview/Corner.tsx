import React from 'react';
import styled from 'styled-components';
import Shape from '../../assets/preview/Corner';

const Corner: React.FC = () => (
  <Wrapper>
    <Shape />
    <Right>
      <Heading>
        We are here to
        {' '}
        change your
        {' '}
        <span>life</span>
      </Heading>
      <Subheading>
        We&apos;ve made the process of finding your dream house a piece of cake!
        Here&apos;s how it works.
      </Subheading>

      <Ul>
        <li>
          <Content>
            <strong>Find your dream house.</strong>
            <div>We have over 300 homes ready for you to view.</div>
          </Content>
        </li>

        <li>
          <Content>
            <strong>Message the seller.</strong>
            <div>We connect you directly to the seller, chat away.</div>
          </Content>
        </li>

        <li>
          <Content>
            <strong>Move in.</strong>
            <div>Agree to a price, and it&apos;s a done deal. You just need to move in.</div>
          </Content>
        </li>
      </Ul>
    </Right>
  </Wrapper>
);

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  flex: 1;
  align-items: center;
  overflow: hidden;
`;

const Right = styled.div`
  max-width: 70%;
  background: ${(props) => props.theme.text_bright};
  padding: 2rem;
  border-radius: 5px;
`;

const Heading = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 300;
  margin-bottom: 2rem;

  & > span {
    position: relative;
  }

  & > span:after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 100%;
    left: 15%;
    top: 50%;
    height: 50%;
    background: ${(props) => props.theme.quinary};
    opacity: 0.15;
  }
`;

const Subheading = styled.div`
  letter-spacing: 3px;
  font-size: 1.25rem;
  font-weight: 300;
  color: ${(props) => props.theme.tertiary};
`;

const Ul = styled.ul`
  margin: 2rem 0;

  & > li {
    display: grid;
    grid-template-columns: 2rem 1fr;
    grid-gap: 1.5rem;
    margin-bottom: 1.5rem;
    
    &:before {
      content: "";
      display: inline-block;
      width: 2rem;
      height: 2rem;
      border-radius: 0 50% 0 50%;
    }
  }

  & li:first-child:before {
    background: ${(props) => props.theme.primary};
  }

  & li:nth-child(2):before {
    background: ${(props) => props.theme.secondary};
  }

  & li:nth-child(3):before {
    background: ${(props) => props.theme.tertiary};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Corner;
