import Hero from './components/Hero';
import Partners from './components/Partners';
import Stats from './components/Stats';
import Services from './components/Services';
import Greencard from './components/Greencard';

export function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* اولین بخش زیر هدر */}
      <Hero />
      
      {/* بقیه سکشن‌های مربوط به شما به ترتیب زیر هم قرار می‌گیرند */}
      <Partners />
      <Stats />
      <Services />
      <Greencard />
     
    </div>
  );
}


 