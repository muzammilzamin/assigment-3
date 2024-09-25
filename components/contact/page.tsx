import React from 'react'
import Link from 'next/link'

export default function Contact() {
  return (
    <div>
      <Link href={'./navbar'}> <strong> GO TO NAVBAR PAGE </strong>  </Link>
     <h1>CONTACT PAGE </h1> 
     <p>Here is my Email abcd@gmail.com</p>
     <p>Here is my phone Number 03737-72227-2</p>
     <p>whats app number 03767-79379-3</p> 
     <h3>FOLLOW ME ON ALL SOCIAL  ACCOUNT</h3>
     <p> <i>Follow me on Instagram 💖</i> </p> <Link  href={'https://www.instagram.com/muzammilofficial70/'}>INSTAGRAM ACCOUNT</Link>
     <p> <i>Follow me on Facebook 🎇 </i> </p> <Link  href={'https://www.facebook.com/profile.php?id=100080612736476&mibextid=ZbWKwL'}>FACBOOK ACCOUNT</Link>
     <p> <i>Connect on linkdin 🧲  </i> </p> <Link  href={'https://www.linkedin.com/in/muzammil-zamin-122526301/?originalSubdomain=pk'}>LINKDIN ACCOUNT</Link>
     <p> <i>See all my projects on Git Hub ✅ </i> </p> <Link href={'https://github.com/muzammilzamin'}>GITHUB ACCOUNT</Link>
    </div>
  )
}
