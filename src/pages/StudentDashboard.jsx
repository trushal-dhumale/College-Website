import React from 'react'

export default function StudentDashboard(){
  const user = JSON.parse(localStorage.getItem('campus_user') || 'null')
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl">Student Dashboard</h2>
      {user ? <p className="mt-2">Welcome, {user.name}</p> : <p className="mt-2">Please login</p>}
      <p className="mt-4">(Placeholders for enrollment, attendance, marks...)</p>
    </div>
  )
}
