//uesReducer이용 - 예제 간단한 투두리스트
import React, { useReducer, useState } from "react";

type Action =
  | { type: "ADD_TODO"; payload: { id: number; newTodo: string } }
  | { type: "DELETE_TODO"; payload: { id: number } };

// Action들을 type alias로 지정해서 reducer함수에서 인자 action받을때 타입지정한다
//이렇게type은 타입을 지정해도되지만 값자체를 지정할수있다(여기선 타입과 값 둘다지정함)
//type: 값, paylaod.id : number타입, payload.newtodo : string타입

let nextId = 0;
const reducer = (todos: { id: number; newTodo: string }[], action: Action) => {
  // todos로 받는건 객체 배열이므로 저런식으로 타입지정한다(type alias를 따로 정의해서 타입지정해도됨)
  // Action 타입은 위의 Action type Alias로 타입지정한다

  switch (action.type) {
    case "ADD_TODO":
      return [
        ...todos,
        { id: action.payload.id, newTodo: action.payload.newTodo },
      ];
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

export default function Todo() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [todo, setTodo] = useState<string>("");

  const inputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const addTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      dispatch({ type: "ADD_TODO", payload: { id: ++nextId, newTodo: todo } });
    }
  };
  const deleteTodo = (id: number): void => {
    dispatch({ type: "DELETE_TODO", payload: { id: id } });
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          inputTodo(e);
        }}
        onKeyDown={(e) => {
          addTodo(e);
        }}
      />
      {todos.map((value) => {
        return (
          <div key={value.id}>
            {value.newTodo}
            <button
              onClick={() => {
                deleteTodo(value.id);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
}
