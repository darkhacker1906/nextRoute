'use client'

import Link from "next/link";

function page({params}) {

  return (
    <div>
        <h1>Student Page</h1>
        <Link href={'/login'}>Hello this is link</Link>
    </div>
  )
}

export default page