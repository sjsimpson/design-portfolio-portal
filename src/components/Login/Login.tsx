import styles from '@/styles/About.module.scss'
import Input from '@/components/Input'
import GoogleAuthButton from '@/components/GoogleAuthButton'
import { useState } from 'react'

//TODO: Create Design portal
//TODO: Create portfolio, that pulls from same DB (with a ACCESS_TOKEN that
//needs to be added to app)
//TODO: Create templates that use API data to generate pages.
//TODO: store text as markdown in DB, and add html editor to portal

export default function Login() {
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
