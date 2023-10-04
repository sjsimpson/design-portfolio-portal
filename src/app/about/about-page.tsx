'use client'

import Layout from '@/components/Layout'
import { useSession } from 'next-auth/react'

//TODO: Create Design portal
//TODO: Create portfolio, that pulls from same DB (with a ACCESS_TOKEN that
//needs to be added to app)
//TODO: Create templates that use API data to generate pages.
//TODO: store text as markdown in DB, and add html editor to portal

export default function About() {
  const session = useSession()
  // const hello = trpc.hello.useQuery({ text: 'client' })
  // const test = trpc.test.useQuery({ text: 'testing' })

  return (
    <>
      <Layout>
        <>
          About
          <button onClick={() => console.log('session', session)}>
            Session
          </button>
        </>
      </Layout>
    </>
  )
}
