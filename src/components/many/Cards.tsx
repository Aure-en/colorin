import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card';
import { Palette } from '../../ts/colors/colors';

interface Props {
  palettes: Palette[],
}

const Cards: React.FC<Props> = ({ palettes }: Props) => (
  <List>
    {palettes.map((palette) => <Card palette={palette} />)}
  </List>
);

Cards.propTypes = {
  palettes: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        hex: PropTypes.string.isRequired,
        rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
        hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      }).isRequired,
    ).isRequired,
  ).isRequired,
};

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  flex: 1;
  grid-gap: 2rem;
`;

export default Cards;
