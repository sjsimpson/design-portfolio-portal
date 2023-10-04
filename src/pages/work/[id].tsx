import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'

export default function ProjectDetails() {
  const router = useRouter()

  return (
    <Layout>
      <Breadcrumbs />
      <div>Project ID: {router.query.id}</div>
    </Layout>
  )
}
