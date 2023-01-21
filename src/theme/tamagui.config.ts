import { createTamagui } from '@tamagui/core';
import animations from './animations';
import fonts from './fonts';
import shorthands from './shorthands';
import themes from './themes';
import tokens from './tokens';

const config = createTamagui({
  fonts,
  tokens,
  themes,
  shorthands,
  animations,
});

export type AppConfig = typeof config;

declare module '@tamagui/core' {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
