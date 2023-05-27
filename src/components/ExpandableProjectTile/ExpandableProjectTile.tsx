import Image from 'next/image'
import { Roboto_Mono } from 'next/font/google'
import styles from './ExpandableProjectTile.module.scss'
import { useEffect, useRef, useState } from 'react'

const roboto = Roboto_Mono({ subsets: ['latin'] })

interface ExpandableProjectTileProps {
  link: string
}

export default function ExpandableProjectTile(
  props: ExpandableProjectTileProps
) {
  const [focused, setFocused] = useState(false)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const expand = () => {
    setFocused(true)
  }

  const collapse = () => {
    setFocused(false)
  }

  return (
    <div
      onClick={!focused ? expand : undefined}
      className={
        focused ? styles.article + ' ' + styles.focused : styles.article
      }
    >
      {focused && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingBottom: '16px',
          }}
        >
          <div>Header</div>
          <div onClick={collapse} style={{ cursor: 'pointer' }}>
            close
          </div>
        </div>
      )}
      <div
        ref={imageContainerRef}
        className={styles.container}
        style={
          focused
            ? { width: '120px', height: '80px' }
            : { width: '100%', height: '100%' }
        }
      >
        <Image
          src={props.link}
          alt="hitlist1"
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </div>

      {focused && (
        <div>
          <div>some sort of description here</div>
          <div>
            additional images from the S3 bucket for this project as well
          </div>
        </div>
      )}
    </div>
  )
}
