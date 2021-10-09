import React from 'react';
import { useTheme } from 'styled-components';

const Leaves: React.FC = () => {
  const theme = useTheme();
  return (
    <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" height="70%" preserveAspectRatio="xMaxYMax slice">
      <g transform="scale(2.8612303290414878)">
        <rect x="0" y="0" width="699" height="699" fill="#ffffff" />
        <rect x="0" y="0" width="233" height="233" fill="#ffffff" />
        <path d="M 0 0 A 116.5 116.5 0 0 1 116.5 116.5 L 0 116.5" fill={theme.primary} />
        <path d="M 116.5 0 A 116.5 116.5 0 0 1  233 116.5 L 116.5 0 A 116.5 116.5 0 0 0 233 116.5" fill={theme.primary} />
        <path d="M 0 233 A 116.5 116.5 0 0 1  116.5 116.5 L 0 233 A 116.5 116.5 0 0 0 116.5 116.5" fill={theme.quinary} />
        <path d="M 116.5 233 A 116.5 116.5 0 0 1  233 116.5 L 116.5 233 A 116.5 116.5 0 0 0 233 116.5" fill={theme.secondary} />
        <path d="M 233 233 A 233 233 0 0 1  466 0 L 233 233 A 233 233 0 0 0 466 0" fill={theme.tertiary} />
        <rect x="466" y="0" width="233" height="233" fill="#ffffff" />
        <path d="M 466 0 A 116.5 116.5 0 0 1  582.5 116.5 L 466 0 A 116.5 116.5 0 0 0 582.5 116.5" fill={theme.quaternary} />
        <path d="M 582.5 0 A 116.5 116.5 0 0 1  699 116.5 L 582.5 0 A 116.5 116.5 0 0 0 699 116.5" fill={theme.tertiary} />
        <path d="M 466 233 A 116.5 116.5 0 0 1  582.5 116.5 L 466 233 A 116.5 116.5 0 0 0 582.5 116.5" fill={theme.quinary} />
        <path d="M 582.5 233 A 116.5 116.5 0 0 1  699 116.5 L 582.5 233 A 116.5 116.5 0 0 0 699 116.5" fill={theme.quaternary} />
        <rect x="0" y="233" width="233" height="233" fill="#ffffff" />
        <path d="M 0 349.5 A 116.5 116.5 0 0 1  116.5 233 L 0 349.5 A 116.5 116.5 0 0 0 116.5 233" fill={theme.primary} />
        <path d="M 116.5 349.5 A 116.5 116.5 0 0 0 233 233 L 116.5 233" fill={theme.quinary} />
        <path d="M 0 349.5 A 116.5 116.5 0 0 1 116.5 466 L 0 466" fill={theme.primary} />
        <path d="M 116.5 349.5 A 116.5 116.5 0 0 1  233 466 L 116.5 349.5 A 116.5 116.5 0 0 0 233 466" fill={theme.secondary} />
        <path d="M 233 466 A 233 233 0 0 1  466 233 L 466 466" fill={theme.primary} />
        <path d="M 466 233 A 233 233 0 0 1  699 466 L 466 233 A 233 233 0 0 0 699 466" fill={theme.secondary} />
        <path d="M 0 699 A 233 233 0 0 1  233 466 L 0 699 A 233 233 0 0 0 233 466" fill={theme.primary} />
        <path d="M 233 699 A 233 233 0 0 1  466 466 L 233 699 A 233 233 0 0 0 466 466" fill={theme.quinary} />
        <path d="M 466 466 A 233 233 0 0 1  699 699 L 466 466 A 233 233 0 0 0 699 699" fill={theme.quaternary} />
      </g>
    </svg>
  );
};

export default Leaves;
