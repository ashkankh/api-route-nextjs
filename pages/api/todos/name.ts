import { NextApiRequest,NextApiResponse } from "next";
interface dataType{
    route:string,
    name:string
}

export default function handler(req:NextApiRequest,res:NextApiResponse<dataType>){
    res.status(200).json({route:"api/todos",name:"askan"})
}