import Layout from '@/components/Layout'
import { useSession } from 'next-auth/react'
import { trpc } from '../utils/trpc'

//TODO: Create Design portal
//TODO: Create portfolio, that pulls from same DB (with a ACCESS_TOKEN that
//needs to be added to app)
//TODO: Create templates that use API data to generate pages.
//TODO: store text as markdown in DB, and add html editor to portal

export default function About() {
  const session = useSession()
  const hello = trpc.hello.useQuery({ text: 'client' })
  const test = trpc.test.useQuery({ text: 'testing' })

  if (!hello.data) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Layout>
        <>
          About
          <div>{hello.data.greeting}</div>
          <button onClick={() => console.log('session', session)}>
            Session
          </button>
          <button onClick={() => console.log('hello', hello)}>hello</button>
          <button onClick={() => console.log('test', test)}>test</button>
        </>
      </Layout>
    </>
  )
}
