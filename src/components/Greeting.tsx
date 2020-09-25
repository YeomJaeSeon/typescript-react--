//tsx에선 어떻게 props로 전달하는지 알수있는 예제
//부모에게서 받은 props 타입지정하면 끝

import React from "react";

type GreetingProps = {
  name: string;
  sayHello: (x: string) => void;
  optional?: string;
  mark: string;
};

export default function Greeting({
  name,
  sayHello,
  optional,
  mark,
}: GreetingProps) {
  return (
    <div>
      {name}아 안녕?{mark}
      <button
        onClick={() => {
          sayHello(name);
        }}
      >
        clickme
      </button>
      {optional && <p>{optional}</p>}
    </div>
  );
}

Greeting.defaultProps = {
  mark: "!",
};
