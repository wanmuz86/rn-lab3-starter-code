module.exports = {
  presets: ['module:@react-native/babel-preset'],
  // Required configuration for animation plugin
  // animation -> navigation drawer
  plugins: ["react-native-reanimated/plugin"], // MUST be last
};
