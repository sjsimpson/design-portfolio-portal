import { router, publicProcedure } from '../trpc'
import { Prisma } from '@prisma/client'
import { prisma } from '../prisma'
import { z } from 'zod'

const defaultProjectImageSelect = Prisma.validator<Prisma.ProjectImageSelect>()(
  {
    id: true,
    url: true,
    projectId: true,
    order: true,
  }
)

export const projectImageRouter = router({
  list: publicProcedure
    .input(
      z.object({
        projectId: z.string(),
      })
    )
    .query(async ({ input }) => {
      const items = await prisma.project.findMany({
        select: defaultProjectImageSelect,
        where: { id: input.projectId },
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
