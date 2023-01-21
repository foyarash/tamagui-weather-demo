import { createFont } from '@tamagui/core';

const montserrat = createFont({
  family: 'Montserrat',
  size: {
    xxs: 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
  },
  weight: {
    light: '300',
    regular: '400',
    medium: '500',
    bold: '700',
  },
  lineHeight: {
    base: 16,
  },
  letterSpacing: {},
  face: {
    300: {
      normal: 'Montserrat_300Light',
      italic: 'Montserrat_300Light_Italic',
    },
    400: {
      normal: 'Montserrat_400Regular',
      italic: 'Montserrat_400Regular_Italic',
    },
    500: {
      normal: 'Montserrat_500Medium',
      italic: 'Montserrat_500Medium_Italic',
    },
    700: {
      normal: 'Montserrat_700Bold',
      italic: 'Montserrat_700Bold_Italic',
    },
  },
});

const fonts = {
  body: montserrat,
  heading: montserrat,
};

export default fonts;
