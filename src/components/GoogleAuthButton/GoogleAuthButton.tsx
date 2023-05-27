import { signIn } from 'next-auth/react'
import { Roboto_Mono } from 'next/font/google'

import Icon from "../Icon"
import styles from './GoogleAuthButton.module.scss'

const roboto = Roboto_Mono({ subsets: ['latin'] })

function GoogleAuthButton() {
  // <button className={styles.button} onClick={() => signIn('google')}>Sign in with Google</button>
  return (
    <>
      <button
        style={roboto.style}
        className={styles.button}
        onClick={() => signIn('google')}
      >
        <Icon />
        <span className={styles.text}>Sign in with Google</span>
      </button>
    </>
  )
}

export default GoogleAuthButton
