import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('student')
  const [err, setErr] = useState(null)
  const nav = useNavigate()

  const submit = async (e) => {
    e.preventDefault();
    try{
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ name, email, password, role })
      })
      const data = await res.json()
      if(res.ok){ localStorage.setItem('campus_token', data.token); localStorage.setItem('campus_user', JSON.stringify(data.user)); nav('/student') }
      else setErr(data.error || 'Signup failed')
    }catch(err){ setErr('Network error') }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl mb-4">Signup</h2>
      {err && <div className="mb-2 text-sm text-red-600">{err}</div>}
      <form onSubmit={submit} className="space-y-3">
        <input className="w-full border p-2 rounded" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required />
        <input className="w-full border p-2 rounded" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input type="password" className="w-full border p-2 rounded" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <select value={role} onChange={e=>setRole(e.target.value)} className="w-full border p-2 rounded">
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
        </select>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded">Signup</button>
      </form>
    </div>
  )
}
