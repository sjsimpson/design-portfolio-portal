'use client'

import styles from '@/styles/About.module.scss'
import Input from '@/components/Input'
import GoogleAuthButton from '@/components/GoogleAuthButton'
import { useState } from 'react'

export default function SignIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <div className={styles.main}>
        <Input
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onInput={(e: any) => {
            setUsername(e.target.value)
          }}
        />
        <Input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onInput={(e: any) => {
            setPassword(e.target.value)
          }}
        />
        <GoogleAuthButton />
      </div>
    </>
  )
}
