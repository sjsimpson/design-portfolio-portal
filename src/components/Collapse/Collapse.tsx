import styles from './Collapse.module.scss'
import { useRef, useState } from 'react'

export default function Collapse() {
  const [maxHeight, setMaxHeight] = useState(0)
  const collapseRef = useRef<HTMLDivElement>(null)

  const handleClick = (e: any) => {
    e.preventDefault()
    if (collapseRef.current) {
      if (maxHeight) {
        setMaxHeight(0)
      } else {
        setMaxHeight(collapseRef.current.scrollHeight)
      }
    }
  }

  return (
    <>
      <div className={styles.collapsible} onClick={handleClick}>
        Click me to expand
      </div>
      <div
        ref={collapseRef}
        className={styles.content}
        style={{ maxHeight: maxHeight }}
      >
        some content here
      </div>
      <div>more content that is just here</div>
    </>
  )
}
