import { supabase } from "./supabase";

export const getAllTodos = async () => {
  const todos = await supabase.from("todos").select("*");
  return todos.data;
};
