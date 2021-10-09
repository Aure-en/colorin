import React from 'react';
import Center from './Center';
import Geometric from './Geometric';
import Triangle from './Triangle';
import Leaves from './Leaves';

interface Props {
  number: number,
}

const Preview: React.FC<Props> = ({ number }: Props) => {
  switch (number) {
    case 1:
      return <Geometric />;
    case 2:
      return <Triangle />;
    case 3:
      return <Center />;
    case 4:
      return <Leaves />;
    default:
      return <></>;
  }
};

export default Preview;
