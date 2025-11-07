import { motion } from 'framer-motion';
import { ShieldCheck, Wallet, Recycle, Trophy, Smartphone, FileSpreadsheet, BellRing, Truck } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Role-based Access',
    desc: 'Secure authentication for admin, staff, and customers with granular permissions.',
  },
  {
    icon: Recycle,
    title: 'Deposit Management',
    desc: 'Record waste type, weight, and price with automatic calculations and receipts.',
  },
  {
    icon: Wallet,
    title: 'E-Wallet Balance',
    desc: 'Track earnings, withdrawals, and bonuses in a transparent wallet system.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Reports & Export',
    desc: 'Monthly and yearly summaries exportable to Excel or PDF for auditing.',
  },
  {
    icon: Trophy,
    title: 'Rewards & Points',
    desc: 'Delight customers with loyalty points and tiered rewards for eco-habits.',
  },
  {
    icon: Truck,
    title: 'Pickup Requests',
    desc: 'Schedule and manage collection services with real-time status updates.',
  },
  {
    icon: BellRing,
    title: 'WhatsApp Alerts',
    desc: 'Send instant notifications via UltraMsg WhatsApp integration.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-first UI',
    desc: 'Responsive, app-like experience on phones and tablets with smooth animations.',
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/40 via-transparent to-emerald-50/40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Built for Eco-Tech Operations</h2>
          <p className="mt-2 text-gray-600">Everything you need to run a modern Waste Bank</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm"
            >
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-100 opacity-40 transition-transform group-hover:scale-110" />
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700 shadow-inner">
                  <f.icon size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
