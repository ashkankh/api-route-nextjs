import { NextApiRequest, NextApiResponse } from "next";

interface dataType {
    message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<dataType>) {
    res.status(200).json({ message: "Welcome to HomePage api." })
}