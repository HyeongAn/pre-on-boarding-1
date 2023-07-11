# pre-on-boarding-1

## 정리글

[Notion으로 보기](https://www.notion.so/Week-1-1-90827cb3295a4eb5baca3e37b114e33d?pvs=4)



## React와 History API 사용하여 SPA Router 기능 구현하기

<aside>
💡 가이드에 따라 코드를 작성하고, 과제 결과물은 각자 깃허브에 public 레포지토리로 업로드 후 디스코드 내 과제 제출 스레드에 링크를 제출해주세요.

</aside>

**1) 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.**

- `/` → `root` 페이지
- `/about` → `about` 페이지

**2) 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.**

- 힌트) `window.onpopstate`, `window.location.pathname` History API(`pushState`)

**3) Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.**

```tsx
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
```

**4) 최소한의 push 기능을 가진 useRouter Hook을 작성한다.**

```tsx
const { push } = useRouter();
```

**5) 아래 스크린샷을 참고하여 앱을 작성한다.**

- **TO-BE) Root 경로**
    
    ![image](https://github.com/HyeongAn/pre-on-boarding-1/assets/93849618/eb9041cc-25a1-46be-b59f-96c8645326e0)

)
    
- **TO-BE) About 경로**
    
    ![image](https://github.com/HyeongAn/pre-on-boarding-1/assets/93849618/6f1bac49-dcae-4502-bae4-2fb2163936c2)

    
