module.exports = {
	root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', 'plugin:@typescript-eslint/recommended', '@vue/prettier'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    "@typescript-eslint/no-inferrable-types": "off", // 关闭类型推断
    "@typescript-eslint/no-unused-vars": 1, // ts文件var规则
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 未使用变量警告
    'no-unused-vars': 1,
    // 函数前空格
    'space-before-function-paren': 0,
    // 如果if语句里面有return,后面不能跟else语句
    'no-else-return': 2,
    // 首选const
    'prefer-const': 1,
    // for in循环要用if语句过滤
    'guard-for-in': 1,
    //switch语句最后必须有default
    'default-case': 2,
    // 禁止使用alert confirm prompt
    'no-alert': 2,
    // 尽可能使用单引号
    quotes: ['error', 'single'],
    // 尽可能不加分号
    semi: ['error', 'never'],
    // parseInt必须指定第二个参数
    radix: 2,
    // 禁用var，用let和const代替
    'no-var': 2,
    // 禁止不必要的call和apply
    'no-useless-call': 2,
    // 函数参数不能重复
    'no-dupe-args': 2,
    // 在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-dupe-keys': 2,
    // 一个函数最多能指定4个参数
    'max-params': ['error', { max: 4 }],
    // 箭头函数前后必须要有空格
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ]
  }
}
