module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["vuetify", "eslint:recommended", "plugin:vue/essential"],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "vue/valid-v-slot": ["error", { allowModifiers: true }], 
  },
}
