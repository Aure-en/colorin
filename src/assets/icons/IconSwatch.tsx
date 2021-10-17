import React, { ReactElement } from 'react';
import styled, { useTheme } from 'styled-components';

const IconSwatch: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();

  return (
    <Wrapper>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-color-swatch" width="56" height="56" viewBox="0 0 24 24" strokeWidth="0.5" stroke={theme.text} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2" fill={theme.secondary} />
        <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9" fill={theme.tertiary} />
        <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" fill={theme.quaternary} />
        <line x1="17" y1="17" x2="17" y2="17.01" />
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  transform: scale(-1, 1);
`;

export default IconSwatch;
