import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import IconSwatch from '../../assets/icons/IconSwatch';

const Header: React.FC = () => (
  <Wrapper>
    <IconSwatch />
    <nav>
      <Link
        exact
        activeStyle={{
          fontWeight: 400,
        }}
        to="/"
      >
        Preview
      </Link>
      <Link
        exact
        activeStyle={{
          fontWeight: 400,
        }}
        to="/shades"
      >
        Shades
      </Link>
      <Link
        exact
        activeStyle={{
          fontWeight: 400,
        }}
        to="/list"
      >
        Palettes
      </Link>
    </nav>
  </Wrapper>
);

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.primary};
  padding: 0.25rem 1rem;

  & > nav {
    margin-left: 0.75rem;
  }
`;

const Link = styled(NavLink)`
  text-transform: uppercase;
  font-weight: 300;
  text-decoration: none;
  color: ${(props) => props.theme.text};
  margin: 0 0.75rem;
  font-size: 1.25rem;
`;

export default Header;
