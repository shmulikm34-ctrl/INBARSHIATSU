import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'

export default function Contact(){
  const [sent, setSent] = useState(false)
  return (
    <section>
      <Helmet>
        <title>צור קשר – ענבר שיאצו</title>
        <meta name="description" content="דברו איתנו לקביעת תור ושאלות על טיפולי שיאצו." />
        <link rel="canonical" href="https://inbarshiatsu.co.il/contact" />
      </Helmet>
      <h1>צור קשר</h1>
      <p style={{color:'var(--muted)'}}>נשמח לחזור אליך בהקדם. מלא/י פרטים וניצור קשר.</p>
      {!sent ? (
        <form className="card" style={{maxWidth:680, marginTop:16}} onSubmit={(e) => {e.preventDefault(); setSent(true)}}>
          <label htmlFor="name">שם מלא</label>
          <input id="name" name="name" placeholder="ישראל ישראלי" required />
          <label htmlFor="phone">טלפון</label>
          <input id="phone" name="phone" placeholder="050-1234567" required inputMode="tel" />
          <label htmlFor="email">אימייל</label>
          <input id="email" name="email" placeholder="name@example.com" type="email" />
          <label htmlFor="msg">הודעה</label>
          <textarea id="msg" name="message" rows={4} placeholder="כיתבו לנו כמה מילים..." />
          <div style={{display:'flex', gap:12, marginTop:12}}>
            <button className="btn" type="submit">שליחה</button>
            <a className="cta" href="/">חזרה לדף הבית</a>
          </div>
        </form>
      ) : (
        <div className="card" style={{maxWidth:560, marginTop:16}} role="status" aria-live="polite">
          <h3>תודה! ההודעה התקבלה.</h3>
          <p>נחזור אליך בהקדם האפשרי.</p>
          <p><a className="cta" href="/">חזרה לדף הבית</a></p>
        </div>
      )}
    </section>
  )
}
