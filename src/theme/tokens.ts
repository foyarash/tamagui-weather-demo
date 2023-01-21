import { createTokens } from '@tamagui/core';

const tokens = createTokens({
  color: {
    white: '#fff',
    black: '#000',
    darkblue: '#2B2D42',
    darkgrey: '#8D99AE',
    lightgrey: '#EDF2F4',
    lightred: '#EF233C',
    darkred: '#D90429',
  },
  size: {
    full: '100%',
    '1/2': '50%',
    '3/4': '75%',
  },
  radius: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    round: 99999,
  },
  space: {
    xxs: 2,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 48,
  },
  zIndex: {},
});

export default tokens;
