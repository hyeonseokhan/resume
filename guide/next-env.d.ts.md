# next-env.d.ts
TypeScript를 사용하는 Next.js 프로젝트에서 타입 선언을 관리하기 위해 사용됩니다. 이 파일은 주로 Next.js, 이미지 파일, CSS 모듈 등 프로젝트에서 사용하는 다양한 모듈에 대한 타입 정의를 포함합니다. 각 설정에 대해 설명하겠습니다:
```typescript
// / <reference types="next" />
// / <reference types="next/types/global" />
// / <reference types="next-images" />

// import { CSSProperties } from 'styled-components';

// declare module '*.module.css' {
//   const classes: { [key: string]: CSSProperties };
//   export default classes;
// }

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.ico' {
  const value: string;
  export default value;
}

declare module '*.css' {
  const value: { [key: string]: string };
export default value;
}

```