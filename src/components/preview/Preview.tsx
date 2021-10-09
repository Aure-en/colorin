import React from 'react';
import Geometric from './Geometric';
import Triangle from './Triangle';

interface Props {
  number: number,
}

const Preview: React.FC<Props> = ({ number }: Props) => {
  switch (number) {
    case 1:
      return <Geometric />;
    case 2:
      return <Triangle />;
    default:
      return <></>;
  }
};

export default Preview;
