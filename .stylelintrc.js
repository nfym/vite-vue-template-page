module.exports = {
  plugins: ['stylelint-order'],
  extends: [
    // 解析非 css 文件
    'stylelint-config-html',
    // 规则包
    'stylelint-config-standard-less',
    'stylelint-config-recommended-vue',
    'stylelint-config-rational-order'
  ],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
  rules: {
    'function-no-unknown': null,
    'selector-class-pattern': null,
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'number',
    'value-keyword-case': [
      'lower',
      {
        ignoreFunctions: ['v-bind', 'var']
      }
    ]
  }
}
