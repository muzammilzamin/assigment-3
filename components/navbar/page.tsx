import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div>
      <h1>NAVBAR PAGE</h1>
      <Link href={'/'}>Home</Link>
      <br />
      <Link href={'./about'}>About</Link>
      <br />
      <Link href={'./footer'}>Footer</Link>
    

    </div>
  )
}
