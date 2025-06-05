"use client";

import { createTodo } from "./actions";

export function TodoForm() {
  const handleCreateTodo = async (formData: FormData) => {
    const response = await createTodo(formData);
    if (response.status === 201) console.log("Todo created successfully");
  };

  return (
    <form action={handleCreateTodo}>
      <input type="text" name="text" className="bg-red-50" />
      <button type="submit">追加</button>
    </form>
  );
}
