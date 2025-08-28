import { todosType } from "@/types/todos.type";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { json } from "stream/consumers";

function TodoDetails() {
  const [todo, setTodo] = useState<todosType>();
  const [newTodo, setNewTodo] = useState<string>("");
  const router = useRouter();

  const clickHanlder = async () => {

    const res = await fetch(`http://localhost:3000/api/todos/${router.query.id}`,{
        method:"PATCH",
        body: JSON.stringify({newTodo}),
        headers:{"Content-Type":"application/json"}
    })
    const data = await res.json()
    setTodo(data)
  };

  useEffect(() => {
    if (!router.isReady) return;
    const { id } = router.query;

    const fetchTodo = async () => {
      const res = await fetch(`http://localhost:3000/api/todos/${id}`);
      const data = await res.json();
      setTodo(data);
    };

    fetchTodo();
  }, [router.isReady, router.query]);

  useEffect(() => {
    console.log(todo);
  }, [todo]);

  return (
    <div>
      <h2>
        {todo?.id} | {todo?.title}
      </h2>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      ></input>
      <button className="cursor-pointer" onClick={clickHanlder}>
        change
      </button>
    </div>
  );
}

export default TodoDetails;
