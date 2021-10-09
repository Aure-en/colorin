import React from 'react';
import { useTheme } from 'styled-components';

const Corner: React.FC = () => {
  const theme = useTheme();

  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      height="100%"
      viewBox="0 0 300 200"
      xmlSpace="preserve"
    >

      <g>
        <line fill="#ffffff" x1="0" y1="193.1" x2="0" y2="0" />
        <path fill="#ffffff" d="M310.6,193.1" />
        <g>
          <g>
            <polygon fill={theme.primary} points="146,51.3 146.3,103.5 95.8,51.3 			" />
            <path fill={theme.secondary} d="M146.3,51.3c-0.2-28.1-21.5-50.9-47.9-51.2v51.2H146.3z" />
            <polygon fill={theme.tertiary} points="0,0.2 0,25.8 23.5,25.8 			" />
            <polygon fill={theme.quinary} points="0,25.8 0,51.4 23.5,51.4 			" />
            <path fill={theme.tertiary} d="M47.9,0c-0.2,0-0.5,0-0.7,0C33.8,0,23,11.6,23,25.8s10.9,25.8,24.2,25.8c0.2,0,0.5,0,0.7,0V0z" />
            <path fill={theme.secondary} d="M72.8,0c-0.2,0-0.5,0-0.7,0C58.8,0,47.9,11.6,47.9,25.8s10.9,25.8,24.2,25.8c0.2,0,0.5,0,0.7,0V0z" />
            <path
              fill={theme.secondary}
              d="M118.8,103.5c0,0.3,0,0.5,0,0.7c0,14.3,10.9,25.8,24.2,25.8s24.2-11.6,24.2-25.8c0-0.3,0-0.5,0-0.7H118.8z"
            />
            <path
              fill={theme.tertiary}
              d="M194.4,51.3c0-0.3,0-0.5,0-0.7c0-14.3-10.9-25.8-24.2-25.8c-13.4,0-24.2,11.6-24.2,25.8c0,0.3,0,0.5,0,0.7
				H194.4z"
            />
            <polygon fill={theme.tertiary} points="0,103.5 47.9,51.6 47.9,103.5 			" />
            <path fill={theme.tertiary} d="M0,103.5v28.3c0,0-1.2,22.1,24.9,22.3v-50.7H0z" />
            <polygon fill={theme.tertiary} points="35.4,51.6 42.1,51.6 0,95.8 0,89.1 			" />
            <polygon fill={theme.quinary} points="0,76.6 0,83.5 30,51.4 23.5,51.4 			" />
            <polygon fill={theme.quinary} points="0,63.1 0,69.6 17.5,51.4 12,51.4 			" />
            <polygon fill={theme.quinary} points="0,56.9 6.9,51.4 0,51.4 			" />
            <path fill={theme.quinary} d="M73.5,51.7C69.8,65,60.1,75.4,47.9,79.2v24.3c24.2-4.6,43.4-25.4,47.9-51.9H73.5z" />
            <g>
              <path fill={theme.tertiary} d="M73.6,0c-0.2,0-0.5,0-0.7,0h1.4C74,0,73.8,0,73.6,0z" />
              <path fill={theme.tertiary} d="M74.3,0c13.1,0.4,23.5,11.8,23.5,25.8V0H74.3z" />
              <path fill={theme.tertiary} d="M73.6,51.6h24.2V25.8C97.8,40.1,86.9,51.6,73.6,51.6z" />
              <path fill={theme.tertiary} d="M72.8,51.6h0.7C73.3,51.6,73.1,51.6,72.8,51.6L72.8,51.6z" />
            </g>
            <path fill={theme.tertiary} d="M96.4,77.6v25.9h22.4C118.8,103.5,98.9,102.6,96.4,77.6z" />
            <path
              fill={theme.tertiary}
              d="M131.3,76.5c0,6.5-5,11.8-11.1,11.8c-6.1,0-11.1-5.3-11.1-11.8c0-6.5,5-11.8,11.1-11.8
				C126.4,64.7,131.3,70,131.3,76.5z"
            />
            <path fill={theme.tertiary} d="M121.1,51.6C121.1,51.6,121.1,51.6,121.1,51.6c0-13.7-10.4-24.8-23.2-24.8v24.8H121.1z" />
            <polygon fill={theme.primary} points="47.9,103.5 96.4,103.5 96.4,154.2 			" />
            <path fill={theme.primary} d="M47.9,51.6l24.9,0c0,0-19.5,0.8-24.9,19V51.6z" />
            <path fill={theme.quinary} d="M56.1,125.8c0,8.2-6.3,14.9-14,14.9s-14-6.7-14-14.9c0-8.2,6.3-14.9,14-14.9S56.1,117.5,56.1,125.8z" />
            <path fill={theme.quinary} d="M71.9,145.5c0,5-3.8,9-8.5,9c-4.7,0-8.5-4-8.5-9c0-5,3.8-9,8.5-9C68.1,136.5,71.9,140.5,71.9,145.5z" />
            <path
              fill={theme.secondary}
              d="M190.4,79.7c0,9.6-7.3,17.4-16.3,17.4c-9,0-16.3-7.8-16.3-17.4c0-9.6,7.3-17.4,16.3-17.4
				C183.1,62.3,190.4,70.1,190.4,79.7z"
            />
            <path fill={theme.secondary} d="M114.9,130.1c0,1.5-1.1,2.7-2.6,2.7s-2.6-1.2-2.6-2.7c0-1.5,1.1-2.7,2.6-2.7S114.9,128.6,114.9,130.1z" />
          </g>
          <polygon fill={theme.secondary} points="24.9,154.2 24.9,193.1 53.7,154.2 		" />
          <polygon fill={theme.tertiary} points="53.7,154.2 96.4,154.2 96.4,193.1 		" />
          <path fill={theme.tertiary} d="M194.4,0v16c0,0-6.2-15.8-20.3-16H194.4z" />
        </g>
      </g>
    </svg>

  );
};

export default Corner;
