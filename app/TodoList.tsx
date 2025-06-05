"use client";

import { deleteTodo } from "./actions";

interface Props {
  todos: { id: string; text: string }[];
}

export function TodoList({ todos }: Props) {
  return (
    <ul className="flex flex-col gap-4">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center justify-between">
          <p>{todo.text}</p>
          <button
            className="bg-black text-white"
            onClick={async () => {
              const res = await deleteTodo(todo.id);
              console.log(res);
            }}
          >
            削除
          </button>
        </li>
      ))}
    </ul>
  );
}
