import type { inferAsyncReturnType } from '@trpc/server'
import type { CreateNextContextOptions } from '@trpc/server/adapters/next'
import { getSession } from 'next-auth/react'

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext(opts: CreateNextContextOptions) {
  const owner = process.env.OWNER
  const session = await getSession({ req: opts.req })

  return {
    owner,
    session,
  }
}

export type Context = inferAsyncReturnType<typeof createContext>
