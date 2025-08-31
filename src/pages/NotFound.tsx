import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <section className="card" style={{maxWidth:680, margin:'24px auto'}}>
      <Helmet><title>דף לא נמצא – ענבר שיאצו</title></Helmet>
      <h1 style={{marginTop:0}}>דף לא נמצא (404)</h1>
      <p>מצטערים, לא מצאנו את הדף שביקשת.</p>
      <p><Link className="cta" to="/">חזרה לדף הבית</Link></p>
    </section>
  )
}
