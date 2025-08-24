import { todosData } from "@/data/todos";
import { todosType } from "@/types/todos.type";
import { title } from "process";
import { useEffect, useState } from "react";


export default function Index() {
  const [todos, setTodos] = useState<todosType[]>([])
  const [todo, setTodo] = useState<string>("")

  const addHandler = async () => {
    const res = await fetch("api/todos", {
      method: "POST",
      body: JSON.stringify({ todo }),
      headers: { "Content-Type": "application/json" }
    })
    const data = await res.json()
    console.log(data)
  }

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("api/todos")
      const data = await res.json();
      setTodos(data)
    }
    fetchData();
  }, [])
  return (
    <>
      Home
      {todos.map((todo) => (<li key={todo.id}>{todo.title}</li>))}
      <div className="flex flex-row items-center">
        <input className="flex p-1 m-1  rounded-lg border-2 border-blue-400" onChange={(e) => setTodo(e.target.value)} placeholder="Enter Todo"></input>
        <button className="flex justify-center items-center px-10 h-9  bg-blue-500 rounded-md text-white" onClick={addHandler}>add</button>
      </div>
    </>
  );
}
