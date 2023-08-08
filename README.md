# Sample Mobile Web App With Next.js 13

## 개요

nextjs 13버전 복습 겸 모바일웹앱 샘플 (날씨앱)
yarn create next-app --tailwind sample-mobile-webapp

## 실행법

yarn dev

## 생활코딩 강의 기준으로 진행함 + 추가 진행사항 들

[X] 샘플앱세탁

- layout.js에서 layout 기본 설정

[X] 빌드와 배포

- 빌드 시 yarn build 실행
- 실행 시 yarn start 실행
- .next폴더가 실제 서비스에 올라갈 때 쓰는 폴더임

[X] 뼈대 만들기

- 공통 영역을 layout에 생성

[X] Routing

- layout.js에 추가해놓은 /create 경로에 맞게 src/app/create 폴더 생성
- 그 하위에 page.js / layout.js 생성
- 최초에 생성된것과 동일하게 page, layout 두개다 있으면 됨

- 상세보기 기능 같은 경우 파라미터에 따라 다르게 데이터를 보여줘야하므로 다이나믹 라우팅 기능이 필요함
- 라우팅 경로 하단에 []를 붙이면 동적으로 라우팅 경로를 설정할 수 있음
- id를 확인하려면 props.param을 통해 확인 가능

[ ] Single Page Application

[ ] 정적 자원 사용

[ ] CSS

[ ] backend

[ ] 글 목록 가져오기

[ ] 읽기 기능 구현

[ ] 생성 기능 구현

[ ] udpate, delete 보이기

[ ] 수정 기능

[ ] 삭제 기능

[ ] 환경변수

---

[ ] 에셋 설정

[ ] API 연결

[ ] 화면 디자인

[ ] 홈 화면 생성

[ ] movies 화면 생성

[ ] about 화면 생성
