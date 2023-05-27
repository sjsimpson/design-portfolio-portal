import { FormEventHandler, useMemo, useRef, useState } from 'react'
import { Roboto_Mono } from 'next/font/google'
import styles from './Input.module.scss'

const roboto = Roboto_Mono({ subsets: ['latin'] })

interface InputProps {
  id: string
  placeholder: string
  value: string
  onInput: FormEventHandler
  type: string
}

function Input(props: InputProps) {
  const [focus, setFocus] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const labelClasses = useMemo(() => {
    if (props.value || focus) {
      return [styles.label, styles.active]
    }
    return [styles.label]
  }, [props.value, focus])

  const handleClick = () => {
    inputRef.current?.focus()
  }

  const onFocus = () => setFocus(true)
  const onBlur = () => setFocus(false)

  return (
    <>
      <div className={styles.inputContainer}>
        <input
          ref={inputRef}
          className={styles.input}
          style={roboto.style}
          id={props.id}
          onInput={props.onInput}
          value={props.value}
          type={props.type}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <label
          onClick={handleClick}
          className={labelClasses.join(' ')}
          style={roboto.style}
        >
          {props.placeholder}
        </label>
      </div>
    </>
  )
}

export default Input
