import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>This is the log in page
      <br/>
      <div><Link href={"/"}>Go to home page</Link></div>
    </div>
  )
}

export default page