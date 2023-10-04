import Image from 'next/image'
import { Roboto_Mono } from 'next/font/google'
import styles from './ProjectTile.module.scss'
import { useRef, useState } from 'react'
import Link from 'next/link'

const roboto = Roboto_Mono({ subsets: ['latin'] })

interface ProjectTileProps {
  name: string
  href: string
  thumbnail: string
}

export default function ProjectTile(props: ProjectTileProps) {
  const containerRef = useRef<HTMLAnchorElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const [position, setPosition] = useState(containerRef.current?.scrollHeight)

  const handleMouseEnter = () => setPosition(0)
  const handleMouseLeave = () => {
    if (containerRef.current) {
      const height = containerRef.current?.scrollHeight
      setPosition(height)
    }
  }

  return (
    <Link
      href={props.href}
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.container}
    >
      <Image
        src={props.thumbnail}
        alt="hitlist1"
        fill={true}
        style={{ objectFit: 'cover' }}
      />
      <div
        ref={overlayRef}
        className={styles.overlay}
        style={{
          ...roboto.style,
          top: `${position}px`,
        }}
      >
        {props.name}
      </div>
    </Link>
  )
}
