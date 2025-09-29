module.exports = {
  presets: [
    ['@vue/app', {
      useBuiltIns: false,
      polyfills: []
    }]
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining'
  ]
}
