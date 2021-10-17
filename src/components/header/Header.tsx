import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import IconSwatch from '../../assets/icons/IconSwatch';
import Format from '../settings/Format';

const Header: React.FunctionComponent = () => (
  <Wrapper>
    <Nav>
      <Link
        exact
        activeStyle={{
          fontWeight: 400,
        }}
        to="/"
      >
        <IconSwatch />
      </Link>

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
    </Nav>
    <Format />
  </Wrapper>
);

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.primary};
  padding: 0.25rem 0;

  @media all and (min-width: 600px) {
    padding: 0.25rem 1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const Link = styled(NavLink)`
  text-transform: uppercase;
  font-weight: 300;
  text-decoration: none;
  color: ${(props) => props.theme.text};
  font-size: 1.25rem;
  margin: 0 0.25rem;

  @media all and (min-width: 600px) {
    margin: 0 0.75rem;
  }
`;

export default Header;
