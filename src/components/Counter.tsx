// useState로 간단하게관리
//tsx에선 useState어떻게? -별차이없다.

import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -1
      </button>
    </div>
  );
}
