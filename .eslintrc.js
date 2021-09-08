module.exports = {
  root: true,
  env: {
    // node: true,
    browser: true,
  },
  extends: [
    'plugin:vue/recommended', // 检测vue
    'standard', //eslint检测规则-standard
    'plugin:prettier/recommended',
    // 'prettier',
    // 'prettier', // 禁用 ESLint 中与 Prettier 冲突的规则
    // "prettier/@typescript-eslint" // 禁用插件中与 Prettier 冲突的规则
    // 'plugin:prettier/recommended', // 它包含了 extends: ['prettier'], plugins: ['prettier']
  ],
  plugins: ['prettier'],
  parserOptions: {
    // parser: 'babel-eslint',
    parser: '@typescript-eslint/parser', // 解析ts文件, 例如识别ts文件的内置类型
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  rules: {
    'prettier/prettier': 2,
    'arrow-parens': 2,
    'lines-around-comment': [
      1,
      {
        beforeBlockComment: true,
      },
    ],
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    'space-before-function-paren': [
      2,
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'new-cap': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
}
