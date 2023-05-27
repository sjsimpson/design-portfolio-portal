import Link from 'next/link'
import { useRouter } from 'next/router'
import { Roboto_Mono } from 'next/font/google'
import styles from './Link.module.scss'

const roboto = Roboto_Mono({ subsets: ['latin'] })

interface LinkProps {
  name: string
  href: string
}

function NextLink(props: LinkProps) {
  const router = useRouter()

  const containerClasses = [styles.outer]

  if (router.asPath === props.href) {
    containerClasses.push(styles.active)
  }

  return (
    <div className={containerClasses.join(' ')}>
      <Link className={styles.link} href={props.href}>
        <span className={roboto.className}>{props.name.toUpperCase()}</span>
      </Link>
    </div>
  )
}

export default NextLink
