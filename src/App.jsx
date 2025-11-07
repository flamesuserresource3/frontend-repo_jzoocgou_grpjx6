import { useEffect } from 'react';
import EcoHeader from './components/EcoHeader';
import LandingHero from './components/LandingHero';
import FeaturesGrid from './components/FeaturesGrid';
import DashboardDemo from './components/DashboardDemo';

function App() {
  useEffect(() => {
    document.body.classList.add('bg-white');
    return () => document.body.classList.remove('bg-white');
  }, []);

  return (
    <div className="min-h-screen font-[Inter] text-gray-900">
      <EcoHeader />
      <main>
        <LandingHero />
        <FeaturesGrid />
        <DashboardDemo />
      </main>
      <footer id="contact" className="border-t border-emerald-100 bg-gradient-to-b from-transparent to-emerald-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-4 sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Bank Sampah — Built with an eco-tech mindset.</p>
          <div className="flex items-center gap-3 text-sm">
            <a href="#" className="text-emerald-700 hover:underline">Privacy</a>
            <span className="text-emerald-300">•</span>
            <a href="#" className="text-emerald-700 hover:underline">Terms</a>
            <span className="text-emerald-300">•</span>
            <a href="#" className="text-emerald-700 hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
