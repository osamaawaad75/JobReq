import { supabase } from '../lib/supabase'
import { useState } from 'react'

export default function Login() {

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

const signIn = async () => {

 await supabase.auth.signInWithPassword({
   email,
   password
 })

 alert("logged in")
}

const signUp = async () => {

 await supabase.auth.signUp({
   email,
   password
 })

 alert("user created")
}

return (

<div>

<h2>Login</h2>

<input
 placeholder="email"
 onChange={(e)=>setEmail(e.target.value)}
/>

<input
 type="password"
 placeholder="password"
 onChange={(e)=>setPassword(e.target.value)}
/>

<br/>

<button onClick={signIn}>Login</button>
<button onClick={signUp}>Sign Up</button>

</div>

)
}
