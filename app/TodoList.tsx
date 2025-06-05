"use client";

import { deleteTodo } from "./actions";

interface Props {
  todos: { id: string; text: string }[];
}

export function TodoList({ todos }: Props) {
  const handleDeleteTodo = async (id: string) => {
    const response = await deleteTodo(id);
    if (response.status === 204) console.log("Todo deleted successfully");
  };

  return (
    <ul className="flex flex-col gap-4">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center justify-between">
          <p>{todo.text}</p>
          <button className="bg-black text-white" onClick={() => handleDeleteTodo(todo.id)}>
            削除
          </button>
        </li>
      ))}
    </ul>
  );
}
