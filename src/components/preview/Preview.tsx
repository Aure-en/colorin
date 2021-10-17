import React from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Center from './Center';
import Geometric from './Geometric';
import Triangle from './Triangle';
import Leaves from './Leaves';
import Corner from './Corner';

interface Props {
  number: number;
  direction: 'next' | 'prev',
}

const preview = (number: number) => {
  switch (number) {
    case 1:
      return <Center />;
    case 2:
      return <Triangle />;
    case 3:
      return <Geometric />;
    case 4:
      return <Leaves />;
    case 5:
      return <Corner />;
    default:
      return <></>;
  }
};

const Preview: React.FunctionComponent<Props> = ({ number, direction }: Props) => (
  <Wrapper className={direction}>
    <CSSTransition
      timeout={750}
      key={number}
      classNames="slide"
    >
      {preview(number)}
    </CSSTransition>
  </Wrapper>
);

export default Preview;

const Wrapper = styled(TransitionGroup)`
  position: relative;
  flex: 1;
  overflow: hidden;

  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
