import { signIn, signOut, useSession } from 'next-auth/react'

export default function AuthButtons() {
  const { data: session } = useSession()

  return session ? (
    <>
      <p>Welcome, {session?.user?.name}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  ) : (
    <button onClick={() => signIn('facebook')}>Sign in with Facebook</button>
  )
}
