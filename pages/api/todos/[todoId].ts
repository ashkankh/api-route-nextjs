import { todosData } from "@/data/todos";
import { todosType } from "@/types/todos.type";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if ((req.method === "GET")) {
    const { todoId } = req.query;
    const id = parseInt(todoId as string, 10);
    const todo = todosData.find((todo) => todo.id === id);
    todo ? res.status(200).json(todo) : res.status(400).json({message:"Not found"}) 
  }else if ((req.method) === "PATCH"){
    const {newTodo} = req.body
    const { todoId } = req.query;
    const converId = parseInt(todoId as string,10)

    console.log(newTodo,converId)
    const newtodo:todosType = {id:converId,title:newTodo}
    res.status(200).json(newtodo)
  }
}
