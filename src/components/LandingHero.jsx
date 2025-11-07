import { motion } from 'framer-motion';
import { ArrowRight, Recycle, ShieldCheck, Wallet, Sparkles } from 'lucide-react';

export default function LandingHero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
            >
              Waste Bank Management reimagined for a greener future
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg text-gray-600"
            >
              Operate like a modern fintech meets sustainability: track deposits, payouts, and pickups in one delightful dashboard.
            </motion.p>

            <div className="mt-8 grid gap-3 sm:flex">
              <a href="#dashboard" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 transition">
                Explore Demo
                <ArrowRight size={18} />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-white px-5 py-3 text-emerald-700 shadow-sm hover:shadow transition">
                How it works
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4">
              {[
                { icon: Recycle, label: 'Waste Types', value: '25+' },
                { icon: Wallet, label: 'E-Wallets', value: 'IDR' },
                { icon: ShieldCheck, label: 'Secure', value: 'Role-based' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-emerald-100 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-emerald-700">
                    <stat.icon size={18} />
                    <span className="text-xs font-medium">{stat.label}</span>
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-gray-900">{stat.value}</div>
                </div>
              ))}
            </dl>
          </div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-emerald-200/40 via-white to-emerald-100/40 blur-2xl" />
            <div className="relative rounded-3xl border border-emerald-100 bg-white p-6 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                {['Plastic', 'Paper', 'Glass', 'Metal', 'Organic', 'E-waste'].map((t) => (
                  <div key={t} className="rounded-xl bg-gradient-to-br from-emerald-50 to-white p-4 border border-emerald-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-600">{t}</div>
                        <div className="text-lg font-semibold text-gray-900">Rp {Math.floor(Math.random()*5000)+2000}/kg</div>
                      </div>
                      <Sparkles className="text-emerald-500" size={18} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
