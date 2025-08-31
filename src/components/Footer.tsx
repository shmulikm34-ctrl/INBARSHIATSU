import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container" role="contentinfo">
        <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:16}}>
          <section>
            <h3 style={{margin:'0 0 8px'}}>פרטי קשר</h3>
            <p>טלפון: 050-0000000<br/>אימייל: info@inbarshiatsu.co.il</p>
          </section>
          <section>
            <h3 style={{margin:'0 0 8px'}}>שעות פעילות</h3>
            <p>א׳–ה׳: 9:00–19:00<br/>ו׳: 9:00–13:00</p>
          </section>
          <section>
            <h3 style={{margin:'0 0 8px'}}>מעקב</h3>
            <p><a href="#" rel="noopener">פייסבוק</a> · <a href="#" rel="noopener">אינסטגרם</a></p>
          </section>
        </div>
        <p style={{marginTop:16}}>© {new Date().getFullYear()} ענבר שיאצו – כל הזכויות שמורות.</p>
      </div>
    </footer>
  )
}
