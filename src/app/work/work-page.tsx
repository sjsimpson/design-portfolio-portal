'use client'

import Layout from '@/components/Layout'
import { Roboto_Mono } from 'next/font/google'
import ProjectTile from '@/components/ProjectTile'
import styles from '@/styles/Work.module.scss'
import { usePathname } from 'next/navigation'
import { trpc } from '@/utils/trpc'
import { useMemo } from 'react'

const roboto = Roboto_Mono({ subsets: ['latin'] })

const static_projects = [
  {
    name: 'Project 1',
    thumbnail:
      'https://storage.googleapis.com/design-portfolio-image-bucket/hitlist1.jpeg',
    _id: '123',
  },
  {
    name: 'Project 2',
    thumbnail: '/slurpee.jpeg',
    _id: '123',
  },
  {
    name: 'Project 3',
    thumbnail: '/skateboards.jpeg',
    _id: '456',
  },
  {
    name: 'Project 4',
    thumbnail: '/skateboards.jpg',
    _id: '789',
  },
]

export default function Work() {
  const pathname = usePathname()
  const projects = trpc.project.list.useQuery()

  return (
    <Layout>
      <div>
        {!!projects.isSuccess && (
          <button onClick={() => console.log(projects.data)}>DATA</button>
        )}
        <div className={styles.flex}>
          {projects.isSuccess &&
            projects.data.map((project) => (
              <ProjectTile
                key={project.id}
                name={project.title}
                href={`${pathname}/${project.id}`}
                thumbnail={project.thumbnail}
              />
            ))}
          {static_projects.map((project, index) => (
            <ProjectTile
              key={index}
              name={project.name}
              href={`${pathname}/${project._id}`}
              thumbnail={project.thumbnail}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}
