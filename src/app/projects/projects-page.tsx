'use client'

import Collapse from '@/components/Collapse'
import Layout from '@/components/Layout'

export default function Project() {
  const handleAdd = () => {}

  return (
    <Layout>
      <div>Projects</div>
      <div>
        <button onClick={handleAdd}>Add Project</button>
      </div>
      <Collapse />
    </Layout>
  )
}
