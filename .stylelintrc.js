module.exports = {
  // ↓排序插件
  plugins: ['stylelint-order'],
  // ↓使用预设配置
  extends: [
    // ↓解析包，解析非 css 文件
    'stylelint-config-html', // 简化 post-html 解析包的配置
    // ↓规则包
    'stylelint-config-standard-less',
    'stylelint-config-recommended-vue',
    'stylelint-config-rational-order' // 排序规则包
  ],
  // ↓忽略文件
  ignoreFiles: ['**/styles/lib/*'],
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
  },
  overrides: [
    {
      files: ['*/*.less', '**/*.less'],
      customSyntax: 'postcss-less'
    }
  ]
}
