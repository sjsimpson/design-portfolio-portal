'use client'

import Input from '@/components/Input'
import Layout from '@/components/Layout'
import { useState } from 'react'

interface Project {
  title: string
  text: string
  ownerId: string
}

interface ProjectImage {
  url: string
  projectId: string
  order: string
}

export default function Admin() {
  const [project, setProject] = useState<Project>({
    title: '',
    text: '',
    ownerId: '',
  })

  const [projectImage, setProjectImage] = useState<ProjectImage>({
    url: '',
    projectId: '',
    order: '',
  })

  return (
    <Layout>
      <div>Project</div>
      <Input
        id="title"
        placeholder="Title"
        type="text"
        onInput={(e: any) => {
          setProject({ ...project, title: e.target.value })
        }}
        value={project.title}
      />
      <Input
        id="text"
        placeholder="Text"
        type="text"
        onInput={(e: any) => {
          setProject({ ...project, text: e.target.value })
        }}
        value={project.text}
      />
      <button onClick={() => console.log('create project')}>
        Create Project
      </button>
      <div>Project Image</div>
      <Input
        id="url"
        placeholder="URL"
        type="text"
        onInput={(e: any) => {
          setProjectImage({ ...projectImage, url: e.target.value })
        }}
        value={projectImage.url}
      />
      <Input
        id="projectId"
        placeholder="Project ID"
        type="text"
        onInput={(e: any) => {
          setProjectImage({ ...projectImage, projectId: e.target.value })
        }}
        value={projectImage.projectId}
      />
      <Input
        id="order"
        placeholder="Order"
        type="text"
        onInput={(e: any) => {
          setProjectImage({ ...projectImage, order: e.target.value })
        }}
        value={projectImage.order}
      />
      <button onClick={() => console.log('create project')}>
        Create Project Image
      </button>
    </Layout>
  )
}
