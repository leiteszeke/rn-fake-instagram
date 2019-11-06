module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '#components': './src/components',
          '#images': './src/images',
          '#screens': './src/screens',
        },
      },
    ],
  ],
};