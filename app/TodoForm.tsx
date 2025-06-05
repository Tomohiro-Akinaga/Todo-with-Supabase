"use client";

import { useFormStatus } from "react-dom";
import { createTodo } from "./actions";

export function TodoForm() {
  function SubmitButton() {
    const status = useFormStatus();
    return (
      <button type="submit" disabled={status.pending}>
        {status.pending ? "作成中" : "追加"}
      </button>
    );
  }
  return (
    <form action={createTodo}>
      <input type="text" name="text" className="bg-red-50" />
      <SubmitButton />
    </form>
  );
}
