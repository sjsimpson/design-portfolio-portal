import Layout from '@/components/Layout'
import { Roboto_Mono } from 'next/font/google'
import ProjectTile from '@/components/ProjectTile'
import ExpandableProjectTile from '@/components/ExpandableProjectTile'
import styles from '@/styles/Work.module.scss'
import { useRef } from 'react'
import { useRouter } from 'next/router'

const roboto = Roboto_Mono({ subsets: ['latin'] })

const projects = [
  {
    name: 'Project 1',
    thumbnail: '/hitlist1.jpeg',
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
  const router = useRouter()

  return (
    <Layout>
      <div className={styles.flex}>
        {projects.map((project) => (
          <ProjectTile
            key={project._id}
            name={project.name}
            href={`${router.asPath}/${project._id}`}
            thumbnail={project.thumbnail}
          />
          // <ExpandableProjectTile key={project._id} link={project.thumbnail} />
        ))}
      </div>
    </Layout>
  )
}
