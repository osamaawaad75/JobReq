import { supabase } from '../lib/supabase'
import { useState } from 'react'

export default function Request(){

const [title,setTitle] = useState('')
const [description,setDescription] = useState('')

const submit = async () => {

 const { data: { user } } = await supabase.auth.getUser()

 await supabase.from('job_requests').insert({
   title,
   description,
   user_id: user.id
 })

 alert("Request submitted")
}

return (

<div>

<h2>Submit Job Request</h2>

<input
 placeholder="Title"
 onChange={(e)=>setTitle(e.target.value)}
/>

<textarea
 placeholder="Description"
 onChange={(e)=>setDescription(e.target.value)}
/>

<br/>

<button onClick={submit}>
 Submit
</button>

</div>

)
}
