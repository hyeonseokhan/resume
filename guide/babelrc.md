# babelrc
Babel은 최신 JavaScript 기능을 이전 버전의 JavaScript로 변환해 주는 트랜스파일러입니다. 주로 여러 브라우저와 호환성을 유지하기 위해 사용됩니다.
```json lines
{
  "presets": ["next/babel"],  // 이 프리셋은 Next.js에서 제공하는 Babel 프리셋입니다. Next.js는 React 기반의 프레임워크로, 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 지원합니다.
    "plugins": [
    [
      "styled-components",    // CSS-in-JS 라이브러리로, JavaScript 파일 내에서 스타일을 정의할 수 있게 해줍니다.
      {
        "ssr": true,          // 서버 사이드 렌더링을 사용할 때 true로 설정합니다.
        "displayName": true,  // 스타일 컴포넌트의 이름을 표시할지 여부를 설정합니다.
        "preprocess": false   // 스타일 컴포넌트를 전처리할지 여부를 설정합니다.
      }
    ]
  ]
}
```