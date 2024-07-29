# tsconfig.json
TypeScript 컴파일러 설정 파일입니다. TypeScript 컴파일러는 tsconfig.json 파일을 참조하여 컴파일 옵션을 설정합니다. tsconfig.json 파일은 프로젝트 루트 디렉터리에 위치해야 합니다.
```json lines
{
  "compilerOptions": {                          // TypeScript 컴파일러 옵션을 설정합니다.
    "target": "es2017",                         // 컴파일된 JavaScript 파일의 ECMAScript 버전을 설정합니다.
    "module": "esnext",                         // ESNext 모듈 시스템을 사용하도록 설정합니다.
    "lib": ["dom", "dom.iterable", "esnext"],   // 컴파일러가 사용할 라이브러리를 설정합니다. 
    "allowJs": true,                            // JavaScript 파일을 컴파일할 수 있도록 설정합니다.
    "skipLibCheck": true,                       // 라이브러리 파일을 검사하지 않도록 설정합니다.
    "esModuleInterop": true,                    // CommonJS와 ES 모듈 간의 호환성을 제공합니다. 
    "strict": true,                             // 엄격한 타입 검사를 수행하도록 설정합니다.
    "forceConsistentCasingInFileNames": true,   // 파일 이름의 일관성을 강제하도록 설정합니다.
    "alwaysStrict": true,                       // 모든 파일에 'use strict'를 삽입하도록 설정합니다. 
    "moduleResolution": "node",                 // Node.js 방식의 모듈 해석
    "resolveJsonModule": true,                  // JSON 파일을 모듈로 사용할 수 있도록 설정합니다.
    "isolatedModules": true,                    // 각 파일을 독립적인 모듈로 처리하도록 설정합니다.
    "noEmit": true,                             // 컴파일된 파일을 생성하지 않도록 설정합니다.
    "jsx": "preserve",
    "noFallthroughCasesInSwitch": true,         // switch 문에서 case 절이 누락되지 않도록 설정합니다.
    "noUnusedLocals": true,                     // 사용되지 않는 지역 변수를 허용하지 않도록 설정합니다.
    "noUnusedParameters": true,                 // 사용되지 않는 매개변수를 허용하지 않도록 설정합니다.
    "outDir": "docs"                            // 컴파일된 파일을 저장할 디렉터리를 설정합니다.
  },
  "include": ["**/*.ts", "**/*.tsx"],           // 컴파일할 파일을 설정합니다.
  "exclude": ["node_modules"],                  // 컴파일에서 제외할 파일을 설정합니다.
  // TypeDoc은 TypeScript 코드의 주석을 기반으로 API 문서를 생성하는 도구입니다. 
  // 이 설정을 통해 TypeDoc이 어떻게 동작할지 제어할 수 있습니다.
  "typedocOptions": {
    "out": "docs/typedoc",                        // 생성된 문서가 저장될 출력 디렉토리를 지정합니다.
    "mode": "file",                                // 문서 생성 모드를 설정합니다. 
    "name": "Resume Next.js: TypeDoc",            // 문서의 제목을 설정합니다.
    "externalPattern": "!**/I*.ts"                // 문서에서 제외할 파일을 설정합니다.
  }
}
```