import { NextApiRequest,NextApiResponse } from "next";

interface dataType {
    name:string
}

export default function handler(req:NextApiRequest,res:NextApiResponse<dataType>){
res.status(200).json({name: "/api/todos/"})
}