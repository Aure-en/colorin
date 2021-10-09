import React from 'react';
import { useTheme } from 'styled-components';

const Geometric = () => {
  const theme = useTheme();

  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      width="50%"
    >
      <g transform="scale(1.3)">
        <rect x="0" y="0" width="642" height="642" fill="#ffffff" />
        <rect x="0" y="0" width="214" height="214" fill="#ffffff" />
        <rect x="0" y="0" width="107" height="107" fill={theme.primary} />
        <path
          d="M 0 107 A 107 107 0 0 1  107 0 L 0 107 A 107 107 0 0 0 107 0"
          fill={theme.tertiary}
        />
        <rect x="107" y="0" width="107" height="107" fill={theme.primary} />
        <path
          d="M 107 107 A 107 107 0 0 1  214 0 L 107 107 A 107 107 0 0 0 214 0"
          fill={theme.secondary}
        />
        <rect x="0" y="107" width="107" height="107" fill={theme.secondary} />
        <path d="M 0 214 A 107 107 0 0 1  107 107 L 107 214" fill={theme.tertiary} />
        <rect x="107" y="107" width="107" height="107" fill={theme.secondary} />
        <path d="M 107 107 A 107 107 0 0 1 214 214 L 107 214" fill={theme.quaternary} />
        <rect x="214" y="0" width="214" height="214" fill="#ffffff" />
        <rect x="214" y="0" width="107" height="107" fill={theme.tertiary} />
        <path
          d="M 214 0 A 107 107 0 0 1  321 107 L 214 0 A 107 107 0 0 0 321 107"
          fill={theme.tertiary}
        />
        <rect x="321" y="0" width="107" height="107" fill={theme.quaternary} />
        <path
          d="M 321 0 A 107 107 0 0 1  428 107 L 321 0 A 107 107 0 0 0 428 107"
          fill={theme.quinary}
        />
        <rect x="214" y="107" width="107" height="107" fill={theme.primary} />
        <path
          d="M 214 107 A 107 107 0 0 1  321 214 L 214 107 A 107 107 0 0 0 321 214"
          fill={theme.quinary}
        />
        <rect x="321" y="107" width="107" height="107" fill={theme.quaternary} />
        <path
          d="M 321 214 A 107 107 0 0 1  428 107 L 321 214 A 107 107 0 0 0 428 107"
          fill={theme.quinary}
        />
        <rect x="428" y="0" width="214" height="214" fill={theme.quinary} />
        <path
          d="M 428 0 A 214 214 0 0 1  642 214 L 428 0 A 214 214 0 0 0 642 214"
          fill={theme.primary}
        />
        <rect x="0" y="214" width="214" height="214" fill={theme.primary} />
        <path
          d="M 0 214 A 214 214 0 0 1  214 428 L 0 214 A 214 214 0 0 0 214 428"
          fill={theme.quaternary}
        />
        <rect x="214" y="214" width="214" height="214" fill="#ffffff" />
        <rect x="214" y="214" width="107" height="107" fill={theme.tertiary} />
        <path d="M 214 321 A 107 107 0 0 1  321 214 L 321 321" fill={theme.tertiary} />
        <rect x="321" y="214" width="107" height="107" fill={theme.secondary} />
        <path
          d="M 321 321 A 107 107 0 0 1  428 214 L 321 321 A 107 107 0 0 0 428 214"
          fill={theme.quaternary}
        />
        <rect x="214" y="321" width="107" height="107" fill={theme.primary} />
        <path d="M 214 428 A 107 107 0 0 0 321 321 L 214 321" fill={theme.secondary} />
        <rect x="321" y="321" width="107" height="107" fill={theme.primary} />
        <path
          d="M 321 321 A 107 107 0 0 1  428 428 L 321 321 A 107 107 0 0 0 428 428"
          fill={theme.quinary}
        />
        <rect x="428" y="214" width="214" height="214" fill={theme.primary} />
        <path
          d="M 428 428 A 214 214 0 0 1  642 214 L 428 428 A 214 214 0 0 0 642 214"
          fill={theme.tertiary}
        />
        <rect x="0" y="428" width="214" height="214" fill="#ffffff" />
        <rect x="0" y="428" width="107" height="107" fill={theme.primary} />
        <path
          d="M 0 535 A 107 107 0 0 1  107 428 L 0 535 A 107 107 0 0 0 107 428"
          fill={theme.primary}
        />
        <rect x="107" y="428" width="107" height="107" fill={theme.tertiary} />
        <path
          d="M 107 535 A 107 107 0 0 1  214 428 L 107 535 A 107 107 0 0 0 214 428"
          fill={theme.primary}
        />
        <rect x="0" y="535" width="107" height="107" fill={theme.secondary} />
        <path
          d="M 0 535 A 107 107 0 0 1  107 642 L 0 535 A 107 107 0 0 0 107 642"
          fill={theme.quinary}
        />
        <rect x="107" y="535" width="107" height="107" fill={theme.primary} />
        <path d="M 107 642 A 107 107 0 0 1  214 535 L 214 642" fill={theme.quinary} />
        <rect x="214" y="428" width="214" height="214" fill={theme.primary} />
        <path d="M 214 428 A 214 214 0 0 0 428 642 L 428 428" fill={theme.tertiary} />
        <rect x="428" y="428" width="214" height="214" fill="#ffffff" />
        <rect x="428" y="428" width="107" height="107" fill={theme.tertiary} />
        <path
          d="M 428 535 A 107 107 0 0 1  535 428 L 428 535 A 107 107 0 0 0 535 428"
          fill={theme.quaternary}
        />
        <rect x="535" y="428" width="107" height="107" fill={theme.quaternary} />
        <path d="M 535 535 A 107 107 0 0 1  642 428 L 642 535" fill={theme.primary} />
        <rect x="428" y="535" width="107" height="107" fill={theme.quaternary} />
        <path d="M 428 642 A 107 107 0 0 0 535 535 L 428 535" fill={theme.tertiary} />
        <rect x="535" y="535" width="107" height="107" fill={theme.secondary} />
        <path
          d="M 535 535 A 107 107 0 0 1  642 642 L 535 535 A 107 107 0 0 0 642 642"
          fill={theme.tertiary}
        />
      </g>
    </svg>
  );
};

export default Geometric;
