# npmrc
NPM(Node Package Manager)의 설정 파일로, 프로젝트 또는 전역적으로 npm의 동작을 제어하는 다양한 설정을 저장할 수 있습니다. .npmrc 파일을 프로젝트 폴더에 추가하면 해당 프로젝트 내에서만 유효한 설정을 지정할 수 있습니다.
```text
legacy-peer-deps=true
```
이 설정은 npm 버전 7 이상에서 사용됩니다. npm 7에서는 패키지 설치 시 peerDependencies(동료 종속성)를 엄격하게 확인하는 방식으로 변경되었습니다. 이로 인해 특정 종속성 트리를 구성하는 데 문제가 발생할 수 있습니다. 예를 들어, 일부 패키지들은 서로 호환되지 않는 peerDependencies를 가질 수 있습니다.

`legacy-peer-deps=true`를 설정하면 npm이 기존 방식(npm 6 이하)으로 peerDependencies를 처리하게 됩니다. 즉, peerDependencies 충돌을 무시하고 패키지를 설치합니다. 이는 npm 7 이상에서 발생할 수 있는 peerDependencies 관련 설치 문제를 해결하는 데 유용할 수 있습니다.