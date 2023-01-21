import { createTheme } from '@tamagui/core';
import tokens from './tokens';

const light = createTheme({
  background: tokens.color.white,
  color: tokens.color.black,
  shadow: tokens.color.black,
});

const dark = createTheme({
  background: tokens.color.black,
  color: tokens.color.white,
  shadow: tokens.color.white,
});

const light_Card = createTheme({
  background: tokens.color.lightgrey,
});

const dark_Card = createTheme({
  background: tokens.color.darkblue,
});

const light_Button_primary = createTheme({
  background: tokens.color.darkblue,
  color: tokens.color.white,
});

const dark_Button_primary = light_Button_primary;

const light_Button_destructive = createTheme({
  background: tokens.color.darkred,
  color: tokens.color.white,
});

const dark_Button_destructive = light_Button_destructive;

const light_Button_unstyled = createTheme({
  background: 'transparent',
  color: tokens.color.darkblue,
});

const dark_Button_unstyled = createTheme({
  background: 'transparent',
  color: tokens.color.white,
});

const themes = {
  light,
  light_Card,
  dark,
  dark_Card,
  light_Button_primary,
  dark_Button_primary,
  light_Button_destructive,
  dark_Button_destructive,
  light_Button_unstyled,
  dark_Button_unstyled,
};

export default themes;
