import React from 'react';
import { useTheme } from 'styled-components';

const Triangles: React.FunctionComponent = () => {
  const theme = useTheme();

  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      viewBox="0 0 2000 3000"
      preserveAspectRatio="xMaxYMax slice"
    >
      <g transform="scale(4.672897196261682)">
        <rect x="0" y="0" width="428" height="642" fill="#ffffff" />
        <rect x="0" y="0" width="107" height="107" fill="#ffffff" />
        <polygon points="53.5,0 53.5,53.5 0,53.5" fill={theme.primary} />
        <polygon points="107,0 107,53.5 53.5,53.5" fill={theme.secondary} />
        <polygon points="53.5,53.5 53.5,107 0,107" fill={theme.tertiary} />
        <polygon points="53.5,53.5 107,53.5 107,107" fill={theme.secondary} />
        <polygon points="107,0 214,0 214,107" fill={theme.tertiary} />
        <rect x="214" y="0" width="107" height="107" fill="#ffffff" />
        <polygon points="214,0 267.5,53.5 214,53.5" fill={theme.primary} />
        <polygon points="267.5,0 321,0 267.5,53.5" fill={theme.quaternary} />
        <polygon points="267.5,53.5 267.5,107 214,107" fill={theme.quaternary} />
        <polygon points="321,53.5 321,107 267.5,107" fill={theme.quinary} />
        <rect x="321" y="0" width="107" height="107" fill="#ffffff" />
        <polygon points="321,0 374.5,0 374.5,53.5" fill={theme.tertiary} />
        <polygon points="374.5,0 428,0 428,53.5" fill={theme.tertiary} />
        <polygon points="321,53.5 374.5,53.5 321,107" fill={theme.primary} />
        <polygon points="428,53.5 428,107 374.5,107" fill={theme.secondary} />
        <rect x="0" y="107" width="107" height="107" fill="#ffffff" />
        <polygon points="0,107 53.5,107 0,160.5" fill={theme.quinary} />
        <polygon points="107,107 107,160.5 53.5,160.5" fill={theme.primary} />
        <polygon points="53.5,160.5 53.5,214 0,214" fill={theme.quaternary} />
        <polygon points="53.5,160.5 107,214 53.5,214" fill={theme.tertiary} />
        <rect x="107" y="107" width="107" height="107" fill="#ffffff" />
        <polygon points="107,107 160.5,107 160.5,160.5" fill={theme.secondary} />
        <polygon points="214,107 214,160.5 160.5,160.5" fill={theme.tertiary} />
        <polygon points="107,160.5 160.5,160.5 107,214" fill={theme.primary} />
        <polygon points="160.5,160.5 214,160.5 214,214" fill={theme.primary} />
        <rect x="214" y="107" width="107" height="107" fill="#ffffff" />
        <polygon points="214,107 267.5,107 267.5,160.5" fill={theme.quinary} />
        <polygon points="267.5,107 321,160.5 267.5,160.5" fill={theme.secondary} />
        <polygon points="214,160.5 267.5,160.5 267.5,214" fill={theme.quaternary} />
        <polygon points="267.5,160.5 321,160.5 267.5,214" fill={theme.secondary} />
        <polygon points="321,107 428,107 321,214" fill={theme.quaternary} />
        <rect x="0" y="214" width="107" height="107" fill="#ffffff" />
        <polygon points="0,214 53.5,214 0,267.5" fill={theme.quinary} />
        <polygon points="107,214 107,267.5 53.5,267.5" fill={theme.quaternary} />
        <polygon points="0,267.5 53.5,267.5 53.5,321" fill={theme.tertiary} />
        <polygon points="53.5,267.5 107,267.5 107,321" fill={theme.quinary} />
        <polygon points="214,214 214,321 107,321" fill={theme.quaternary} />
        <polygon points="214,214 321,214 214,321" fill={theme.secondary} />
        <polygon points="321,214 428,321 321,321" fill={theme.primary} />
        <polygon points="0,321 107,321 0,428" fill={theme.secondary} />
        <rect x="107" y="321" width="107" height="107" fill="#ffffff" />
        <polygon points="107,321 160.5,321 107,374.5" fill={theme.quaternary} />
        <polygon points="160.5,321 214,321 214,374.5" fill={theme.quaternary} />
        <polygon points="107,374.5 160.5,374.5 160.5,428" fill={theme.quaternary} />
        <polygon points="160.5,374.5 214,374.5 214,428" fill={theme.tertiary} />
        <rect x="214" y="321" width="107" height="107" fill="#ffffff" />
        <polygon points="214,321 267.5,374.5 214,374.5" fill={theme.secondary} />
        <polygon points="321,321 321,374.5 267.5,374.5" fill={theme.quaternary} />
        <polygon points="214,374.5 267.5,428 214,428" fill={theme.secondary} />
        <polygon points="267.5,374.5 321,428 267.5,428" fill={theme.secondary} />
        <polygon points="321,321 428,321 428,428" fill={theme.primary} />
        <polygon points="107,428 107,535 0,535" fill={theme.quaternary} />
        <rect x="107" y="428" width="107" height="107" fill="#ffffff" />
        <polygon points="160.5,428 160.5,481.5 107,481.5" fill={theme.secondary} />
        <polygon points="214,428 214,481.5 160.5,481.5" fill={theme.tertiary} />
        <polygon points="107,481.5 160.5,481.5 160.5,535" fill={theme.secondary} />
        <polygon points="160.5,481.5 214,481.5 160.5,535" fill={theme.quinary} />
        <polygon points="214,428 321,428 214,535" fill={theme.secondary} />
        <rect x="321" y="428" width="107" height="107" fill="#ffffff" />
        <polygon points="321,428 374.5,428 321,481.5" fill={theme.quinary} />
        <polygon points="374.5,428 428,428 428,481.5" fill={theme.tertiary} />
        <polygon points="321,481.5 374.5,481.5 374.5,535" fill={theme.primary} />
        <polygon points="374.5,481.5 428,481.5 374.5,535" fill={theme.tertiary} />
        <polygon points="0,535 107,642 0,642" fill={theme.secondary} />
        <rect x="107" y="535" width="107" height="107" fill="#ffffff" />
        <polygon points="107,535 160.5,535 107,588.5" fill={theme.quinary} />
        <polygon points="160.5,535 214,535 214,588.5" fill={theme.tertiary} />
        <polygon points="107,588.5 160.5,588.5 107,642" fill={theme.quinary} />
        <polygon points="160.5,588.5 214,588.5 160.5,642" fill={theme.secondary} />
        <polygon points="214,535 321,535 321,642" fill={theme.quaternary} />
        <polygon points="428,535 428,642 321,642" fill={theme.quaternary} />
      </g>
    </svg>
  );
};

export default Triangles;
