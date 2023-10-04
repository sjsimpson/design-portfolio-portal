'use-client'

import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import Layout from '@/components/Layout'
import { useSearchParams } from 'next/navigation'

export default function ProjectDetails() {
  const params = useSearchParams()

  return (
    <Layout>
      <Breadcrumbs />
      <div>Project ID: {params.get('id')}</div>
    </Layout>
  )
}
