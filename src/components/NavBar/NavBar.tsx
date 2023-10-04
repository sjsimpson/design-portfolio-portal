import { useSession } from 'next-auth/react'
import Link from '../Link'
import styles from './NavBar.module.scss'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

const navLinks = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/work',
    name: 'Work',
  },
  {
    href: '/about',
    name: 'About',
  },
  {
    href: '/info',
    name: 'Info',
  },
  {
    href: '/projects',
    name: 'Projects',
  },
  {
    href: '/admin',
    name: 'Admin',
  },
]

function NavBar() {
  const session = useSession()
  const router = useRouter()

  const position = useMemo(() => {
    const rootPath = router.asPath.split('/')[1]
    const index = navLinks.findIndex(
      (link) => link.href.slice(1, link.href.length) === rootPath
    )

    if (index !== -1) {
      return { left: `${100 * (index + 1)}px` }
    }
  }, [router.asPath])

  // if (session.status === 'authenticated') {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}></div>
      <div className={styles.container}>
        <div className={styles.navlinks}>
          <div className={styles.underline} style={position}></div>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} name={link.name} />
          ))}
        </div>
      </div>
    </div>
  )
  // }

  return null
}

export default NavBar
