import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettierConfig from 'eslint-config-prettier' // 导入 prettier 兼容配置
import prettierPlugin from 'eslint-plugin-prettier'

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'prettier': prettierPlugin, // 注册 prettier 插件
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // --- 自定义优化规则 ---
      'prettier/prettier': 'error', // 违反 Prettier 规则时直接报错
      '@typescript-eslint/no-explicit-any': 'warn', // 低代码项目中尽量少用 any，建议用 unknown
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // 允许下划线开头的未使用的参数
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn', // 强制检查 Hook 的依赖，对 Zustand 和 useEffect 很重要
    },
  },
  prettierConfig, // 重点：最后一行必须放它，用来禁用所有与 Prettier 冲突的 ESLint 规则
)