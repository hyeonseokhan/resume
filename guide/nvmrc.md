# npmrc
Node Version Manager(NVM)에서 사용하는 설정 파일로, 특정 프로젝트에서 사용할 Node.js의 버전을 지정합니다. .nvmrc 파일을 프로젝트 루트 디렉토리에 두면, NVM을 사용하여 쉽게 지정된 버전의 Node.js로 전환할 수 있습니다.
```text
20.15.1
```
### NVM을 사용하여 지정된 버전으로 전환
```bash
nvm use
```
이 명령어는 현재 디렉토리의 .nvmrc 파일을 읽고 해당 Node.js 버전으로 전환합니다. 만약 지정된 버전이 설치되지 않았다면, NVM은 자동으로 해당 버전을 다운로드하고 설치합니다.