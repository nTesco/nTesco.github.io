module.exports = {
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant'],
    ['@nutui/babel-plugin-separate-import', {
      'style': 'less'
    }]
  ],
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
