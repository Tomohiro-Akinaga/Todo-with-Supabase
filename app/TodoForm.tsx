import { createTodo } from "./actions";

export async function TodoForm() {
  return (
    <form action={createTodo}>
      <input type="text" name="text" className="bg-red-50" />
      <button type="submit">追加</button>
    </form>
  );
}
