export default {
  '*.{js,jsx,cjs,mjs,ts,tsx,cts,mts,vue}':
    'eslint --ignore-path .eslintignore --quiet --fix',
  '*.{ts,tsx,cts,mts,vue}': () => 'vue-tsc -p tsconfig.json',
};
