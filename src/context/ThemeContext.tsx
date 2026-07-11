import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react';
import { useColorScheme } from 'react-native';
import { COLORS } from '../constants/colors';

export type ThemeMode = 'light' | 'dark';
type ThemeColors = typeof COLORS.light;

interface ThemeContextValue {
  mode: ThemeMode;
  isDark: boolean;
  colors: ThemeColors;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemScheme = useColorScheme();
  const initial = systemScheme === 'dark' ? 'dark' : 'light';
  const [mode, setMode] = useState<ThemeMode>(initial);

  useEffect(() => {
    // Keep in sync with system changes by default unless user toggles
    setMode(systemScheme === 'dark' ? 'dark' : 'light');
  }, [systemScheme]);

  const toggleMode = () => setMode(m => (m === 'dark' ? 'light' : 'dark'));

  const value = useMemo<ThemeContextValue>(
    () => ({
      mode,
      isDark: mode === 'dark',
      colors: COLORS[mode],
      toggleMode,
    }),
    [mode],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
