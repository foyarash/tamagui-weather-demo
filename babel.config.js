process.env.TAMAGUI_TARGET = 'native';

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        '@tamagui/babel-plugin',
        {
          components: ['@tamagui/core'],
          config: './src/theme/tamagui.config.ts',
          includeExtensions: ['.tsx', '.ts', '.js', '.jsx'],
          disableExtraction: false,
        },
      ],
      // be sure to set TAMAGUI_TARGET
      [
        'transform-inline-environment-variables',
        {
          include: 'TAMAGUI_TARGET',
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
