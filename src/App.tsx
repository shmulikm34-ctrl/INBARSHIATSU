import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App(){
  return (
    <div>
      <Header />
      <main className="container" style={{padding:'20px 0 32px'}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
