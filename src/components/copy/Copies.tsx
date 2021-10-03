import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCopied } from '../../slices/copySlice';
import Copy from './Copy';

const Copies: React.FC = (): ReactElement => {
  const copied = useSelector(getCopied);

  return (
    <Wrapper>
      {copied.map((copy) => (
        <Copy
          x={copy.x}
          y={copy.y}
          key={copy.id}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
`;

export default Copies;
