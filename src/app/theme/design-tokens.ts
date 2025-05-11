import {Theme} from './interfaces/theme.interface';

export const DesignTokens: Theme = {
  colors: {
    primary: '#6200ee',
    secondary: '#03dac6',
    background: '#ffffff',
    text: '#000000',
    border: '#cccccc',
    error: '#e40707',
    success: '#63e407'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '1.5',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
};
