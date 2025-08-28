
import { todosData } from "@/data/todos";
import { todosType } from "@/types/todos.type";
import { NextApiRequest, NextApiResponse } from "next";



export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        res.status(200).json( todosData )
    } else if (req.method === "POST") {
        const { todo } = req.body

        const newTodo: todosType = {
            id: todosData.length + 1,
            title: todo,
        };
        res.status(201).json({ message: "success", data: newTodo, })
    } else if (req.method === "DELETE") {
        // delete all todos
        res.status(200).json({ message: "All todos Deleted", data: [] })
    } else if (req.method === "PUT") {
        res.status(200).json({ message: "Todos Repalce", data: req.body })
    }

}