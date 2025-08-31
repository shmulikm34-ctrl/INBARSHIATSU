import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Home(){
  return (
    <section>
      <Helmet>
        <html lang="he" dir="rtl" />
        <title>ענבר שיאצו – טיפול מגע המותאם לך</title>
        <meta name="description" content="שיאצו מקצועי המסייע בהקלה על כאב, שחרור מתחים ושיפור איכות החיים." />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ענבר שיאצו",
            "image": "https://inbarshiatsu.co.il/icons/icon-512.png",
            "url": "https://inbarshiatsu.co.il",
            "telephone": "+972-50-000-0000",
            "address": { "@type": "PostalAddress", "addressCountry": "IL" },
            "priceRange": "₪₪"
          }
        `}</script>
      </Helmet>

      <div className="hero">
        <div className="container">
          <h1>ענבר שיאצו – טיפול מגע המותאם לך</h1>
          <p>שיאצו מקצועי המסייע בהקלה על כאב, שחרור מתחים ושיפור איכות החיים. הזמינו תור אונליין בקלות.</p>
          <a className="cta" href="/services">הזמינו טיפול עכשיו</a>
        </div>
      </div>

      <div className="container">
        <h2 style={{margin:'24px 0 12px'}}>למה לבחור בנו?</h2>
        <div className="grid cards">
          <article className="card">
            <h3>מקצועיות וניסיון</h3>
            <p>הכשרה מלאה ותיק טיפולים מגוון לכל הגילאים.</p>
          </article>
          <article className="card">
            <h3>התאמה אישית</h3>
            <p>התאמת הטיפול לצרכים הייחודיים שלך – גוף ונפש.</p>
          </article>
          <article className="card">
            <h3>אוירה נינוחה</h3>
            <p>קליניקה מזמינה ושקטה, חוויה נעימה ומרגיעה.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
