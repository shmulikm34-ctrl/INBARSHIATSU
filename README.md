# inbar-shiatsu – אתר ריאקט + TypeScript + Vite

דומיין: **inbarshiatsu.co.il**

## פיתוח
```bash
npm i
npm run dev
```

## בנייה ותצוגה
```bash
npm run build
npm run preview
```

## פריסה ל‑Vercel (מומלץ)
1. צור פרויקט חדש ב‑Vercel וחבר את ה‑repo של GitHub.
2. הגדר **Framework Preset: Vite**. Build Command: `vite build`, Output: `dist/`.
3. לאחר העלייה, הוסף את הדומיין **inbarshiatsu.co.il** ל‑Vercel (Project → Settings → Domains).
4. בצד רשם הדומיינים, הגדר DNS:

   - **Apex** (`inbarshiatsu.co.il`) – רשומת **A/ALIAS** ל‑IP שמוצג ע״י Vercel (בד״כ 76.76.21.21).  
   - **WWW** (`www.inbarshiatsu.co.il`) – **CNAME** ל‑יעד שמוצג ע״י Vercel (למשל `cname.vercel-dns.com`).  
   - המתן להפצת DNS (בדרך כלל עד שעה). חזור ל‑Vercel ולחץ **Verify**.

5. קובץ `vercel.json` כלול לפריסת SPA (כל ראוט → `index.html`) ולכותרות אבטחה בסיסיות.

> הערה: הערכים המדויקים (A/CNAME) מוצגים במסך הדומיין ב‑Vercel – פעל לפיהם במקרה של שינוי.
 
## SEO
- `robots.txt` + `sitemap.xml` מוכנים תחת `/public`.  
- כותרות ו‑Meta פר‑עמוד עם `react-helmet-async`.  
- JSON‑LD (`LocalBusiness`) בדף הבית.

## PWA
- `site.webmanifest` + אייקונים 192/512. אפשר להוסיף Service Worker בהמשך.

## נגישות
- RTL מלא, ניגודיות, פוקוס ברור, labels לטפסים.

