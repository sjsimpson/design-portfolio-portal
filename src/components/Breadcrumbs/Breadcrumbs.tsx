import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Breadcrumbs.module.scss'

export default function Breadcrumbs() {
  const router = useRouter()

  const getHref = (breadcrumb: string) => {
    const pathArray = router.asPath.split('/')
    const index = pathArray.indexOf(breadcrumb)

    return pathArray
      .slice(0, index + 1)
      .reduce((string, current) => string + '/' + current)
  }

  return (
    <>
      <div className={styles.container}>
        {router.asPath
          .slice(1, router.asPath.length)
          .split('/')
          .map((breadcrumb, index) => (
            <div key={index} className={styles.breadcrumb}>
              <span>/ </span>
              <Link href={getHref(breadcrumb)}>{breadcrumb}</Link>
            </div>
          ))}
      </div>
    </>
  )
}
