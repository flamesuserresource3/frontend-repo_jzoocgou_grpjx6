import { motion } from 'framer-motion';
import { Leaf, Recycle, Menu, LogIn, BarChart3, Wallet } from 'lucide-react';
import { useState } from 'react';

export default function EcoHeader() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-100/50 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <motion.div
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
            >
              <Leaf size={20} />
            </motion.div>
            <div className="leading-tight">
              <div className="font-semibold text-gray-900">Bank Sampah</div>
              <div className="text-xs text-emerald-700/80">EcoTech Platform</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-600 hover:text-emerald-700 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#dashboard" className="inline-flex items-center gap-2 rounded-lg border border-emerald-200/70 bg-white px-3 py-2 text-sm text-emerald-700 shadow-sm hover:shadow transition-shadow">
              <BarChart3 size={16} />
              View Demo
            </a>
            <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3.5 py-2 text-sm font-medium text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 transition-colors">
              <LogIn size={16} />
              Sign In
            </button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-emerald-700 hover:bg-emerald-50"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="md:hidden pb-4"
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-gray-700 hover:bg-emerald-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <a href="#dashboard" className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-200/70 bg-white px-3 py-2 text-sm text-emerald-700 shadow-sm">
                  <BarChart3 size={16} />
                  Demo
                </a>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white shadow">
                  <Wallet size={16} />
                  Sign In
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
