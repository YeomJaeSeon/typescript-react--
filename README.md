# Typescript in React

### 1. 부모에게서 받은 Props를 하위컴포넌트에선 어떻게 받지?

-> 부모에게서 받은 Props전부 Type Alias로 타입설정해서 지정해준다.

### 2. 인자로 요소의 이벤트 객체를 받으면 어떻게 처리해?

-> 마우스 올리면 해당 요소의 이벤트 객체 타입이나와! -> 복붙하자.

### 3. Hook은 어떻게? useState, useReducer

-> useState는 큰 차이는 없지만 제너릭으로 ```const [form, setForm] = <number>useState(0)``` 타입을 지정해줄순있다.
null이 올수도 있으니 ```const [form, setForm] = <number | null>useState(null)``` 이런식으론 유용하단다.

useReducer은 액션을 정의할때 type으로 정의하자!
```
type Action =
  | { type: "ADD_TODO"; payload: { id: number; newTodo: string } }
  | { type: "DELETE_TODO"; payload: { id: number } };
```
이런식으로 타입을 정의하면
reducer함수의 인자인 action에 타입지정할수있다

```
const reducer = (todos: { id: number; newTodo: string }[], action: Action) => {
```
참고로 객체 배열인 todos(state)에 타입지정하는 방법은 ```{key : type, ... }[] ```이다.
여기서 의문점
useReducer의 초기값이 빈배열이면? 
(내가 헷갈렸던부분)
당연히 위 타입을 패스한다.
빈배열도 객체배열의 일종이다. 객체가 비면(객체 자체가 없으면) 빈배열이잖아.?
근데 초기값이 ```[{}]``` 이렇게 빈배열안에 빈객체가있다..
이러면 위의 타입을 패스하지못한다.

빈객체가 있는 배열은 이미 빈배열이 아니다!
```{id : number; newTodo: string}[]```와 ```[{}]```는 엄연히 다르다
그치만 ```[]```는 패스한다!
