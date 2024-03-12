import Link from "next/link"

function page() {
  return (
    <div>
        <h1 className="text-3xl font-bold">StudentList</h1>
        <ul>
            <li><Link href={"/login/studentlist/anil"}>Anil</Link></li>
            <li><Link href={"/login/studentlist/peter"}>Peter</Link></li>
            <li><Link href={"/login/studentlist/sam"}>Sam</Link></li>
            <li><Link href={"/login/studentlist/bhaskar"}>Bhaskar</Link></li>
        </ul>
    </div>
  )
}

export default page