import { todosData } from "@/data/todos";
import { todosType } from "@/types/todos.type";
import { useEffect, useState } from "react";


export default function Index() {
  const [todos, setTodos] = useState<todosType[]>([])
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("api/todos")
      const data = await res.json();
      setTodos(data)
    }
    fetchData();
  },[] )
  return (
    <>
      Home
      {todos.map((todo) => (<li key={todo.id}>{todo.title}</li>))}
    </>
  );
}
