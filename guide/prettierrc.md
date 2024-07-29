# prettierrc
Prettier라는 코드 포매터의 설정 파일입니다. Prettier는 일관된 코드 스타일을 유지하고, 코드 포맷을 자동으로 정리해주는 도구입니다. `.prettierrc` 파일을 통해 프로젝트에서 사용할 포맷팅 옵션을 정의할 수 있습니다.
```json lines
{
  "singleQuote": true,      // 문자열을 작은따옴표로 표시
  "trailingComma": "all",   // 객체나 배열의 마지막 요소 뒤에도 쉼표를 추가합니다. 이는 git diff를 더 깔끔하게 만들고, 요소를 추가하거나 제거할 때 줄바꿈 충돌을 줄여줍니다.
  "printWidth": 100,        // 코드 줄의 최대 길이를 100자로 제한
  "arrowParens": "always"   // 화살표 함수의 인자가 하나일 때에도 괄호를 사용합니다.
}
```