import { projectRouter } from './project'
import { projectImageRouter } from './projectImages'
import { router } from '../trpc'

export const appRouter = router({
  project: projectRouter,
  projectImage: projectImageRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
