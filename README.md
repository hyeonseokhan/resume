<div align="center">
  <h1>Online Resume</h1>
  <a href="https://github.com/hyeonseokhan/resume">
    <img
      src="https://img.shields.io/github/stars/hyeonseokhan/resume?style=popout"
      alt="Github Star" />
  </a>
  <a href="https://codeclimate.com/github/hyeonseokhan/resume/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/a86208e0e1094c134c89/maintainability" />
  </a>
</div>
<hr>

## Project
호랑이는 죽어서 가죽을 남기고 우리는 이력서를 남기지! 그런데.. 어디서 부터 어떻게 만들어야 하지..🤔 <br>
멋진 프로젝트를 쉽게 이해하고 나만의 웹 사이트를 구축해 보자! 👊🏻

## Prerequisites
- <a href="https://docs.github.com/ko/pages">Basic knowledge of Github Pages</a>
- <a href="https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script">nvm</a>

## How to use
### Install
```shell
# .nvmrc 에 정의된 nodejs 를 사용한다.
nvm use
# dependencies 다운로드
npm install
```
### Run
```shell
# Dev 모드로 실행
npm run dev
```

### Export
```shell
# Github Pages 배포를 위한 export
npm run export
```

## Structure
| Directory  | Description                                 |
|:-----------|:--------------------------------------------|
| asset      | images, favicon                             |
| components | React Components                            |
| pages      | 리액트 컴포넌트를 하나의 index.html 로 만들기 위한 파일이 있는 폴더 |
| payload    | 이력서 렌더링에 필요한 사용자 데이터가 있는 폴더                 |
| docs       | 랜더링된 html 파일과 정적 리소스 모음 폴더                  |

## Payload Documents


## Thank You 🙇🏻
해당 프로젝트는 '<a herf="https://github.com/uyu423/resume-nextjs/tree/master">resume-nextjs by Yongwoo Yu</a>'의 포크하여 개발하고 있습니다. 덕분에 좋은 프로젝트를 다뤄볼 수 있게되어 감사드립니다.