# eslintrc.js
ESLint의 설정을 정의하는 파일입니다. ESLint는 JavaScript와 TypeScript 코드에서 문제를 찾아주고 스타일 가이드를 강제하는 도구입니다.
```javascript
module.exports = {
  parser: '@typescript-eslint/parser',        // TypeScript 코드를 파싱하기 위해 사용되는 파서입니다. TypeScript 지원을 위해 필요합니다.
  extends: [
    'airbnb',                                 // Airbnb의 JavaScript 스타일 가이드를 사용합니다.
    'plugin:@typescript-eslint/recommended',  // TypeScript에서 권장되는 규칙을 사용합니다.
    'plugin:import/typescript',               // TypeScript에서 import 구문을 사용할 때 필요한 규칙을 사용합니다.
    'plugin:prettier/recommended',            // Prettier와 충돌하는 ESLint 규칙을 비활성화합니다.
    'prettier/react',                         // Prettier의 React 관련 규칙을 사용합니다.
    'prettier/@typescript-eslint',            // Prettier의 TypeScript 관련 규칙을 사용합니다.
  ],
  plugins: [
    '@typescript-eslint',                     // TypeScript에서 사용할 수 있는 ESLint 플러그인입니다. 
    'prettier',                               // Prettier와 ESLint를 함께 사용할 때 필요한 플러그인입니다.
    'react-hooks'                             // React Hooks 규칙을 사용할 때 필요한 플러그인입니다.
  ],
  parserOptions: {
    ecmaVersion: 2019,                        // ECMAScript 2019 버전을 사용합니다.
    sourceType: 'module',                     // ECMAScript 모듈을 사용합니다.
    ecmaFeatures: {
      jsx: true,                              // JSX를 사용합니다.
    },
    project: './tsconfig.json',                // TypeScript 프로젝트 설정 파일의 경로입니다.
  },
  env: {
    browser: true,                            // 브라우저 환경에서 실행되는 코드를 사용합니다.
    jest: true,                               // Jest 테스트 환경에서 실행되는 코드를 사용합니다.
    node: true,                               // Node.js 환경에서 실행되는 코드를 사용합니다.
  },
  rules: {
    'no-underscore-dangle': 0,                              // 변수 이름에 밑줄을 사용할 수 있습니다.
    '@typescript-eslint/no-namespace': 0,                   // 네임스페이스를 사용할 수 있습니다.
    '@typescript-eslint/explicit-function-return-type': 0,  // 함수의 반환 타입을 명시할 필요가 없습니다.
    '@typescript-eslint/no-use-before-define': 0,            // 변수를 선언하기 전에 사용할 수 있습니다.
    'import/prefer-default-export': 0,                      // export default를 사용할 필요가 없습니다.
    'import/extensions': 0,                                 // 파일 확장자를 명시할 필요가 없습니다.
    'react/react-in-jsx-scope': 0,                          // React를 import할 필요가 없습니다.
    quotes: [                                     // 문자열은 작은 따옴표를 사용합니다.
      2,
      'single',
      {
        avoidEscape: true,
      },
    ],
    'react/jsx-filename-extension': [              // JSX 파일의 확장자는 .jsx 또는 .tsx를 사용합니다.
      1,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
  },
};
```