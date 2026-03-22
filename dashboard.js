import { supabase } from '../lib/supabase'
import { useState,useEffect } from 'react'

export default function Dashboard(){

const [jobs,setJobs] = useState([])

useEffect(()=>{
 load()
},[])

const load = async () => {

 const { data: { user } } = await supabase.auth.getUser()

 const { data } = await supabase
   .from('job_requests')
   .select('*')
   .eq('user_id',user.id)

 setJobs(data)
}

return (

<div>

<h2>My Job Requests</h2>

{jobs.map(j => (

<div key={j.id}>
  <h3>{j.title}</h3>
  <p>{j.description}</p>
  <p>Status: {j.status}</p>
</div>

))}

</div>

)
}
