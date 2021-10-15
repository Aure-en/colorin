import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getMainPalette } from '../../slices/paletteSlice';
import { setTheme, getTheme } from '../../slices/settingsSlice';

const Theme: React.FunctionComponent = ({ children }) => {
  const dispatch = useAppDispatch();
  const mainPalette = useAppSelector(getMainPalette);
  const theme = useAppSelector(getTheme);

  // Setup theme
  useEffect(() => {
    if (mainPalette.length >= 5) {
      dispatch(setTheme(mainPalette));
    }
  }, [mainPalette]);

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
