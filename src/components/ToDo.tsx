import { useState } from "react";

export default function TodoList(todos: string[]) {
  let arr = [];
  for (let i = 0; i < Object.keys(todos).length; i++) {
    arr.push(todos[i]);
  }
  return (
    <ul className="absolute top-[60vh] w-[70vw] lg:w-[50vw] lg:text-center overflow-scroll h-[40vh]">
      {arr.map((todo: string) => (
        <li
          key={Math.random()}
          className="w-full h-[5vh] bg-slate-200 first:rounded-t-2xl last:rounded-b-2xl leading-[5vh] mb-1 rounded-md"
        >
          <span className="ms-2 lg:ms-0 text-slate-500">{todo}</span>
        </li>
      ))}
    </ul>
  );
}
