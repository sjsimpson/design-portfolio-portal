import { useRouter } from 'next/router'

export default function Breadcrumbs() {
  const router = useRouter()

  return (
    <>
      <div className={'test'}>{router.asPath}</div>
    </>
  )
}
