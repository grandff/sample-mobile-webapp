# Sample Mobile Web App With Next.js 13 📄

Android Kotlin, iOS Swift Web Mobile App에 들어갈 샘플 웹뷰다. 배포는 vercel을 통해 배포한다.

이 웹의 주요 기능은 API 통신을 통한 유튜브 검색 기능이고, 오픈튜토리얼스의 학습 내용도 포함하고 있다.

CRUD 기능은 Sqlite를 사용해서 처리한다.

## 🔥 Features

- [ ] 기본 홈 화면
- [ ] 기본 디자인 설정
- [ ] 에셋 설정
- [ ] Trending Youtube List Page Add (제일 가운데)
- [ ] Search Videos/channels Page Add
- [ ] Open Tutorials Page Add
- [ ] Basic CRUD Page (LocalStorage 사용)
- [ ] SQLITE ??? 가능하긴함?

## 🚀 Project Structure

```bash
/
├── public/
│   ├── images/
│   │   └── logo.svg
│   └── next.svg
│   └── vercel.svg
├── src/
│   ├── app/
│   │   └── socialIcons.ts
│   ├── components/
│   ├── content/
│   │   |  blog/
│   │   |    └── some-blog-posts.md
│   │   └── _schemas.ts
│   │   └── config.ts
│   ├── layouts/
│   └── pages/
│   └── styles/
│   └── utils/
│   └── config.ts
│   └── types.ts
└── package.json
```

## 📖 디자인 참고

![참고자료](https://dribbble.com/shots/19339947-Mobile-App-for-Movies)
![tailwind refrence](https://flowbite.com/docs/components/bottom-navigation/)

## 💻 Tech Stack

**Main Framework** - [Astro](https://astro.build/)  
**Type Checking** - [TypeScript](https://www.typescriptlang.org/)  
**Component Framework** - [ReactJS](https://reactjs.org/)  
**Styling** - [TailwindCSS](https://tailwindcss.com/)  
**UI/UX** - [Figma](https://figma.com)  
**Fuzzy Search** - [FuseJS](https://fusejs.io/)  
**Icons** - [Boxicons](https://boxicons.com/) | [Tablers](https://tabler-icons.io/)  
**Code Formatting** - [Prettier](https://prettier.io/)  
**Deployment** - [Cloudflare Pages](https://pages.cloudflare.com/)  
**Illustration in About Page** - [https://freesvgillustration.com](https://freesvgillustration.com/)  
**Linting** - [ESLint](https://eslint.org)

## 👨🏻‍💻 Running Locally

```bash
# create
yarn create next-app --tailwind sample-mobile-webapp

# run dev
yarn dev

# install prettier
yarn add prettier
```

## ✨ 생활코딩 강의 기준으로 진행함

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

[X] Single Page Application

- spa를 구현하기 위해서 a 태그가 아닌 link로 수정하기

[X] 정적 자원 사용

- public 에 위치

[X] CSS

- app/layout.js 는 가장 기본이 되는 레이아웃이기 때문에 전역정보라고 보면 됨

[X] backend

- route handler 쪽을 참고하면 next.js로 api 서버를 구축할 수 있음
- json 서버를 통해 샘플 서버 구축

```bash
npx json-server --port 9999 --watch db.json
```

- 9999 포트로 접근이 가능함
- 데이터를 변경하려면 db.json 파일을 수정하면 됨
- fetch를 통해 데이터 조회 가능

```js
fetch('http://localhost:9999/movies')
  .then((res) => res.json())
  .then((data) => console.log(data));
```

[X] 글 목록 가져오기

- server component , client component 가 분리되어있음 (react 개념을 그대로 가져옴)
- 만약 layout.js에 아래와 같이 작성하면 Client Component에서만 동작한다고 오류가 발생함

```js
// src/app/layout.js
const [topics, setTopics] = useState([]);
// 데이터 조회
useEffect(() => {
fetch('http://localhost:9999/topics')
    .then((res) => res.json())
    .then((data) => setTopics(data));
});
```

- 위 오류를 해결하고 싶으면 소스 최상단에 "use client" 추가
- 근데 이렇게 하면 Client Component가 됐기 때문에 Server Component 기능을 사용할 수 없어서 오류가 발생함
- 해당 부분 제거해주면 됨(여기서는 meta)

- 만약 위처럼 설정을 안바꾸고 사용하려면 (SSR 을 하려면) useState 이런걸 쓰는게 아니라 fetch만 가지고 처리해야함

```js
// function과 default 사이에 async 추가
const resp = await fetch('http://localhost:9999/topics');
const topics = await resp.json();
```

[X] 읽기 기능 구현

- read/[id] 에 fetch 추가

[X] 생성 기능 구현

- Create에 생성 기능 추가
- form의 onSubmit은 client 기능이기 때문에 "use client"을 선언해줘야함
- 등록 완료 후 해당 상세 페이지로 이동

[X] udpate, delete 보이기

- update, delete가 필요한 경우에만 보이게 처리
- params를 받게 하기 위해 버튼만 따로 빼고 useParams사용 (client component화 해야함)

[ ] 수정 기능

[ ] 삭제 기능

[ ] 환경변수

## 📜 License

Licensed under the MIT License, Copyright © 2023

---

Made by ME 👨🏻‍💻
