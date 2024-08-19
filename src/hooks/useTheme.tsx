import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';

/**
 * A custom hook that manages the application theme. It updates the `data-theme`
 * attribute on the root HTML element whenever the theme changes in the Redux state.
 *
 * @returns {string} The current theme.
 */
const useTheme = (): string => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
  }, [theme]);

  return theme;
};

export default useTheme;
