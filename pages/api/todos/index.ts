
import { todosData } from "@/data/todos";
import { todosType } from "@/types/todos.type";
import { NextApiRequest, NextApiResponse } from "next";
import { title } from "process";



export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        res.status(200).json(todosData)
    } else if (req.method === "POST") {
        const { todo } = req.body

        const newTodo: todosType = {
            id: todosData.length + 1,
            title: todo,
        };
        res.status(201).json({ message: "success", data: newTodo, })
    }

}