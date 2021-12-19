## 프로젝트 소개

사기조회 시스템에 대한 관리자 페이지 및 서버리스 아키텍쳐 구성

## 프로젝트 구조

<img width="526" alt="image" src="https://user-images.githubusercontent.com/64527451/146667977-4553ca2f-300f-4c77-bb96-2880415b08ba.png">

## 프로젝트 환경

windows 10, Node v16.13.0

## 프로젝트 실행(관리자페이지)

admin-web 폴더 이동 후 필요한 dependency 설치

```shell
cd admin-web
npm install 또는 yarn install
```

.env 파일 설정 .env.example 파일을 .env로 변경
이후 프로젝트 실행

```shell
npm start 또는 yarn start
```

## 스트레스 테스트

artillery library 설치 후 (`npm install -g artillery`) 터미널에 아래 명령어 입력

```shell
artillery run test ./test/stress-test.yml
```
