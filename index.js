import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Job Request Portal</h1>

      <Link href="/login">Login</Link><br/>
      <Link href="/request">Submit Request</Link><br/>
      <Link href="/dashboard">My Requests</Link>
    </div>
  )
}
