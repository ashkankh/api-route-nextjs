
import { todosData } from "@/data/todos";
import { NextApiRequest, NextApiResponse } from "next";
import { title } from "process";



export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(todosData)
}