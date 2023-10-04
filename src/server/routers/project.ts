import { router, publicProcedure } from '../trpc'
import { Prisma } from '@prisma/client'
import { prisma } from '../prisma'
import { z } from 'zod'

const defaultProjectSelect = Prisma.validator<Prisma.ProjectSelect>()({
  id: true,
  title: true,
  text: true,
  thumbnail: true,
})

export const projectRouter = router({
  list: publicProcedure.query(async () => {
    const items = await prisma.project.findMany({
      select: defaultProjectSelect,
      where: {},
    })
    return items
  }),
  //   add: publicProcedure
  //     .input(
  //       z.object({
  //         title: z.string(),
  //         text: z.string(),
  //       })
  //     )
  //     .mutation(async ({ input }) => {
  //       const project = prisma.project.create({
  //         data: { ...input },
  //         select: defaultProjectSelect,
  //       })
  //     }),
})
