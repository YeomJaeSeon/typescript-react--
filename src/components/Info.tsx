import { stringify } from "querystring";
//input 태그의 이벤트 객체를 인자로 받을떄 해당 인자의 타입은 어떻게??

import React, { useState } from "react";

type InfoType = {
  showConsole: (form: { name: string; description: string }) => void;
};

export default function Info({ showConsole }: InfoType) {
  const [form, setForm] = useState({ name: "", description: "" });
  const { name, description } = form;

  const changeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // 해당 타겟 element의 속성값을 destructuring한 것이다
    setForm({ ...form, [name]: value });
  };

  const handleFunc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showConsole(form);
    setForm({ name: "", description: "" });
  };

  return (
    <form onSubmit={handleFunc}>
      <input name="name" value={name} onChange={changeFunc} />
      <input name="description" value={description} onChange={changeFunc} />
      <button type="submit">등록</button>
    </form>
  );
}
