import React from 'react'
import Link from 'next/link'

export default function About() {
  return (
    <div>
      <h1>ABOUT PAGE</h1>
      <p>Hello my name is  MUZAMMIL <br /> i am a student of GIAIC <br />
      i am a front-end developer
      </p>
      <p>you can contact me here  <Link href={'./contact'}>  <b>Contact</b> </Link> </p>
       
     
    </div>
  )
}
