import React from 'react'
import { Helmet } from 'react-helmet-async'

type Service = { name: string; duration: string; price: string; desc: string }
const services: Service[] = [
  { name: 'שיאצו קלאסי', duration: '60 ד׳', price: '₪260', desc: 'טיפול מגע יפני לשחרור כאבים ומתחים.' },
  { name: 'שיאצו ממוקד צוואר/גב', duration: '45 ד׳', price: '₪220', desc: 'מיקוד באזורים תפוסים ושיפור טווח תנועה.' },
  { name: 'שיאצו עדין לנשים בהריון', duration: '60 ד׳', price: '₪280', desc: 'תמיכה והקלה לאורך ההריון בעדינות ובבטחה.' },
]

export default function Services(){
  return (
    <section>
      <Helmet>
        <title>שירותים ומחירון – ענבר שיאצו</title>
        <meta name="description" content="מחירון טיפולי שיאצו: קלאסי, ממוקד צוואר/גב, ולנשים בהריון." />
        <link rel="canonical" href="https://inbarshiatsu.co.il/services" />
      </Helmet>
      <h1>שירותים ומחירון</h1>
      <p style={{color:'var(--muted)'}}>כל המחירים כוללים מע״מ · ניתן לשלב חבילות בהנחה</p>
      <div className="grid cards" style={{marginTop:16}}>
        {services.map((s) => (
          <article key={s.name} className="card" aria-label={s.name}>
            <h3 style={{marginBottom:4}}>{s.name}</h3>
            <p style={{margin:'0 0 8px'}}>{s.desc}</p>
            <p style={{margin:'0 0 8px'}}><strong>{s.duration}</strong> · <strong>{s.price}</strong></p>
            <a className="btn" href="/contact" aria-label={"צור קשר לגבי " + s.name}>שאל/י על זמינות</a>
          </article>
        ))}
      </div>
    </section>
  )
}
