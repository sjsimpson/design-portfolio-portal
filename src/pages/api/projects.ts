// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Project = {
  id: string
  layoutId: string
  coverImage: string
  images: string[]
  title: string
  text: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project>
) {
  res.status(200).json(req.body)
}
