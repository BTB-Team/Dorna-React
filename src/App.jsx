import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from'./components/layouts/MainLayout';
import { PrivateRoute } from'./components/layouts/PrivateRoute';
import { Home } from './components/pages/home/Home';
import { About } from './components/pages/about/About';
import { Services } from './components/pages/services/Services';
import { Portfolio } from './components/pages/portfolio/Portfolio';
import { Contact } from './components/pages/contact/Contact';
import { Dashboard } from './components/dashboard/Dashboard';
import './App.css'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        
        {/* گروه اول: صفحات عمومی سایت (همراه با هدر و فوتر) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/Contact" element={<Contact />}/>
        </Route>

        {/* گروه دوم: مسیرهای محافظت‌شده داشبورد (بدون هدر و فوتر عمومی) */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Route>

        {/* مدیریت صفحات ۴۰۴ کلی */}
         {/* <Route path="*" element={<NotFound />} /> */}

      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
