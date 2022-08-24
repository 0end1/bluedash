module.exports = {
  "presets": [
    // "@vue/cli-plugin-babel/preset",
    ['@vue/app',
    {
      useBuiltIns: 'entry',
      polyfills: ['es6.promise', 'es6.symbol']
    }
    ]
  ],
  "plugins": [
    'lodash',
    'jsx-v-model',
    [
      "import",
      {
        "libraryName": "vant",
        "libraryDirectory": "es",
        "style": true
      },
      "vant",
    ]
  ]
}
