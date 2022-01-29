# REACT Project - 01 : Dice Game

리액트 강의를 들으며 진행한 간단한 리액트 프로젝트

## 배운 것들

### 1. index.js가 하는 일

React가 처음 실행되면 브라우저가 index.html을 열고 index.js를 실행한다.  
이 때 index.js의 `render()`가 실행되며 첫 번째 파라미터(jsx문법으로 작성된 녀석)을 HTML요소로 바꿔서
두 번째 파라미터에 넣는다.  

### 2. JSX와 프래그먼트

JSX = js를 통해 HTML을 작성할 수 있는 js의 확장된 문법  
일반적인 HTML태그들과 똑같이 쓸 수 있으나, class&for는 className, htmlFor로 써야 하고  
onclick등의 속성은 camel case로 써야 한다

JSX문법으로 HTML을 작성할 땐 반드시 하나로 감싸진 태그로 작성해야 하며, react에서 제공하는 프래그먼트 `<></>`를 통해  
감싸줄 수도 있다.

### 3. JSX에서 js코드 사용법

중괄호를 이용해 넣을 수 있다  
ex)  
```
import ReactDOM from 'react-dom';

const name = "리액트";

ReactDOM.render(
  <>
    <h1>안녕 {name}!</h1>
  </>,
  document.getElementById('root')
);
```


### 4. 컴포넌트의 개념

```
function func(){
  return <h1>hello, my name is JSH</h1>;
}
```
여기서 func를 `component`라고 부르며, 안에서 얘를 구성하는 애들을 `element`라고 부른다.  
지금 당장은 이렇게만 알아두자.


### 5. Props의 개념

컴포넌트가 어떤 값을 전달받아 사용할 수도 있는데, 이 값들을 `props`라 한다.  
컴포넌트에 속성들을 지정하는 형태로 전달하며, `객체 형태`로 전달된다. 디폴트 props도 지정가능하다


### 6. children의 개념

JSX문법에서 컴포넌트 작성 시 단일태그가 아니라 여는태그+닫는태그의 형태로 작성할 경우 이 태그 사이에 작성된  
텍스트가 자동으로 children이란 이름표를 달고 컴포넌트로 전달됨. 즉 children = 조금 특별한 props의 일종


### 7. state의 개념

React에서 데이터를 다룰 때 사용하는 것으로, props가 부모 컴포넌트에서 자식 컴포넌트로 넘겨주는 값들이라면  
state는 컴포넌트 자기 자신이 갖는 값.  
이 state값이 바뀔 때마다 얘를 갖고 있는 컴포넌트가 새로 렌더링된다.  
`useState`를 통해 초깃값을 할당하고, setter함수를 통해 이 state값을 바꿀 수 있으며 setter함수를 통해서만  
바꿔야 한다


### 8. React가 렌더링하는 방식

state가 바뀔 때마다 그 state를 갖고 있는 컴포넌트 자체를 통째로 새로 렌더링  
이 때 안 바뀌는 부분도 다시 그리는 일종의 낭비를 피하기 위해 React는 `Virtual DOM`이란 것을 활용  
새로 렌더링할 때 우선 실제 DOM Tree가 아니라 Virtual DOM에 적용하고, state변경 전의 virtual DOM과 변경 후의  
virtual DOM을 비교해 실제로 바뀐 부분만 찾아낸 다음 그 부분들만 실제 DOM Tree에 적용

### 9. 컴포넌트에 css 적용하는 방법 2개

#### 1. 인라인 스타일로 적용하기
적용할 css를 객체 형태로 적용하고 style속성값으로 작성  
실제로 태그에 style을 인라인으로 멕인 것처럼 된다(개발자 도구로 보면)
ex)
```
function Button({ color, children, onClick }) {
  const baseButtonStyle = {
    padding: '14px 27px',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: '9999px',
    fontSize: '17px',
  };
  
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
}
```
#### 2. css파일로 작성
컴포넌트별로 css파일을 만들고 `import './Button.css';`등으로 그 컴포넌트의 js파일에 쓰면 됨  
컴포넌트 하나당 style태그가 만들어져서 적용되는 식으로 반영된다.

