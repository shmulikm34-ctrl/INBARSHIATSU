import { Link, Routes, Route } from "react-router-dom";

function Home(){ return <div><h1>בית</h1><p>ברוכים הבאים.</p></div>; }
function Services(){ return <div><h1>שירותים</h1><p>שיאצו בקליניקה / בבית לקוח.</p></div>; }
function Contact(){ return <div><h1>צור קשר</h1><p>טלפון | וואטסאפ | טופס.</p></div>; }

export default function App(){
  return (
    <div style={{fontFamily:"Heebo, Arial", direction:"rtl"}}>
      <header style={{background:"#e8f5e9", padding:16, borderBottom:"1px solid #c8e6c9"}}>
        <strong>ענבר שיאצו</strong>
      </header>
      <nav style={{display:"flex",gap:16,padding:16,borderBottom:"1px solid #eee"}}>
        <Link to="/">בית</Link>
        <Link to="/services">שירותים</Link>
        <Link to="/contact">צור קשר</Link>
      </nav>
      <main style={{padding:24}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </main>
    </div>
  );
}
