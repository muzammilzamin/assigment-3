'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function page() {
  const rout = useRouter()
  return (
    <div>
      <h1>WELCOME TO HOME PAGE </h1> <br />
      <br />

      <h2> <b>PAGES</b></h2>
      <ol>
        <li><Link href={'../components/about'}><b>CLICK HERE TO GO ABOUT PAGE</b></Link></li>
        <li><Link href={'./components/navbar'}><b>CLICK HERE TO GO NAVBAR PAGE</b></Link></li>
        <li><Link href={'./components/contact'}><b>CLICK HERE TO GO CONTACT PAGE</b></Link></li>
        <li><Link href={'./components/footer'}><b>CLICK HERE TO GO FOOTER PAGE</b></Link></li>
      </ol>
      <h2> <b> BUTTONS</b> </h2>
      <p> YOU CAN ALSO USE THESE BUTTONS TO MOVE OTHER PAGEES</p>

      <button onClick={()=>rout.push('./components/navbar')} style={{ backgroundColor: 'green' }}>NAVBAR</button> <br /> <br />
      <button onClick={()=>rout.push('./components/footer')} style={{ backgroundColor: 'green' }}>FOOTER</button> <br />  <br />
      <button onClick={()=>rout.push('./components/contact')} style={{ backgroundColor: 'green' }}>CONTACT</button> <br /> <br />
      <button onClick={()=>rout.push('./components/about')}   style={{ backgroundColor: 'green' }}>ABOUT</button> <br /> <br />

    </div>
  )
}
