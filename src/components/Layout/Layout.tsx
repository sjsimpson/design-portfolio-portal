import { useSession } from 'next-auth/react'
import styles from './Layout.module.scss'
// import Login from '@/components/Login'

function Layout(props: { children: JSX.Element | JSX.Element[] }) {
  // const session = useSession()

  return (
    <>
      {/* session.status === 'authenticated' ? ( */}
      <div className={styles.main}>{props.children}</div>
      {/* ) : (
         <Login />
      )*/}
    </>
  )
}

export default Layout
