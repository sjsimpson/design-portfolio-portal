// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Project = {
  id: string
  title: string
  text: string
  ownerId: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project>
) {
  console.log('testing api interaction')
  res.status(200).json(req.body)
}
