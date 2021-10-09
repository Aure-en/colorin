import React from "react";
import styled from "styled-components";

interface Props {
  select: (number: number) => void;
  total: number;
}

const Buttons: React.FC<Props> = ({ select, total }: Props) => (
  <Wrapper>
    {Array.from(Array(total).keys()).map((number: number) => (
      <button type="button" onClick={() => select(number + 1)}>
        {number + 1}
      </button>
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Buttons;
