import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Faculty from './pages/Faculty'
import Events from './pages/Events'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import StudentDashboard from './pages/StudentDashboard'
import AdminDashboard from './pages/AdminDashboard'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/faculty" element={<Faculty/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/student" element={<StudentDashboard/>} />
          <Route path="/admin" element={<AdminDashboard/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
