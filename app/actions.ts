"use server";

import { supabase } from "@/lib/supabase";

import { revalidatePath } from "next/cache";

export async function getTodos() {
  const todos = await supabase.from("todos").select("*");
  return todos.data ?? [];
}

export async function createTodo(formData: FormData) {
  const text = formData.get("text");
  await supabase.from("todos").insert({ text });
  revalidatePath("/");
}

export async function deleteTodo(id: string) {
  const res = await supabase.from("todos").delete().eq("id", id);
  revalidatePath("/");
  return res;
}
