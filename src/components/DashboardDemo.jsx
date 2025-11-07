import { motion } from 'framer-motion';
import { Users, Wallet, TrendingUp, Package2, Download, CalendarRange } from 'lucide-react';

function LineChart({ data, height = 160, stroke = '#059669', fill = 'rgba(5,150,105,0.15)' }) {
  const width = 640;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const padding = 24;
  const xStep = (width - padding * 2) / (data.length - 1);
  const yScale = (val) => {
    if (max === min) return height / 2;
    return height - padding - ((val - min) / (max - min)) * (height - padding * 2);
  };
  const points = data.map((v, i) => `${padding + i * xStep},${yScale(v)}`).join(' ');
  const area = `${padding},${height - padding} ${points} ${width - padding},${height - padding}`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-40">
      <defs>
        <linearGradient id="lg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.25" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`M ${area} Z`} fill="url(#lg)" />
      <polyline fill="none" stroke={stroke} strokeWidth="2.5" points={points} />
    </svg>
  );
}

function Donut({ values, colors, size = 140, thickness = 14 }) {
  const total = values.reduce((a, b) => a + b, 0);
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="mx-auto">
      <g transform={`translate(${size / 2}, ${size / 2}) rotate(-90)`}>
        {values.map((v, i) => {
          const frac = v / total;
          const len = circumference * frac;
          const circle = (
            <circle
              key={i}
              r={radius}
              cx="0"
              cy="0"
              fill="transparent"
              stroke={colors[i]}
              strokeWidth={thickness}
              strokeDasharray={`${len} ${circumference - len}`}
              strokeDashoffset={-offset}
            />
          );
          offset += len;
          return circle;
        })}
      </g>
      <circle cx={size / 2} cy={size / 2} r={radius - 10} fill="white" />
    </svg>
  );
}

function BarChart({ labels, values, colors }) {
  const max = Math.max(...values);
  return (
    <div className="grid h-44 items-end gap-3" style={{ gridTemplateColumns: `repeat(${values.length}, minmax(0, 1fr))` }}>
      {values.map((v, i) => (
        <div key={labels[i]} className="flex flex-col items-center gap-2">
          <div className="w-full rounded-t-lg" style={{ height: `${(v / max) * 100}%`, background: colors[i] }} />
          <span className="text-xs text-gray-600">{labels[i]}</span>
        </div>
      ))}
    </div>
  );
}

export default function DashboardDemo() {
  const summary = [
    { label: 'Total Users', value: '1,284', change: '+8.2%', icon: Users, color: 'from-emerald-500 to-teal-500' },
    { label: 'E-Wallet Balance', value: 'Rp 28.4M', change: '+12.1%', icon: Wallet, color: 'from-lime-500 to-emerald-500' },
    { label: 'Waste Collected', value: '42.6T', change: '+5.4%', icon: Package2, color: 'from-emerald-600 to-green-500' },
    { label: 'Income', value: 'Rp 63.1M', change: '+9.8%', icon: TrendingUp, color: 'from-teal-600 to-emerald-500' },
  ];

  const lineData = [12, 18, 15, 22, 27, 24, 30, 28, 34, 31, 36, 40];
  const barLabels = ['Plastic', 'Paper', 'Glass', 'Metal', 'Organic', 'E-waste'];
  const barValues = [4500, 3200, 1800, 5200, 900, 7000];
  const barColors = ['#10b981', '#34d399', '#6ee7b7', '#059669', '#d1fae5', '#065f46'];
  const donutValues = [62, 28, 10];
  const donutColors = ['#10b981', '#34d399', '#6ee7b7'];

  return (
    <section id="dashboard" className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-50 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Admin Dashboard</h2>
            <p className="text-gray-600">A realistic preview of analytics and reports</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-white px-3 py-2 text-sm text-emerald-700 shadow-sm hover:shadow">
              <CalendarRange size={16} />
              Last 12 months
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-emerald-700">
              <Download size={16} />
              Export
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {summary.map((s) => (
            <motion.div
              key={s.label}
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm"
            >
              <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${s.color} opacity-20`} />
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600">{s.label}</div>
                  <div className="mt-1 text-2xl font-semibold text-gray-900">{s.value}</div>
                  <div className="mt-1 text-xs font-medium text-emerald-700">{s.change} vs last period</div>
                </div>
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                  <s.icon size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm lg:col-span-2">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Waste Collected over Time</h3>
              <span className="text-xs text-gray-500">Tons/month</span>
            </div>
            <LineChart data={lineData} />
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Transactions Mix</h3>
              <span className="text-xs text-gray-500">%</span>
            </div>
            <Donut values={donutValues} colors={donutColors} />
            <div className="mt-2 grid grid-cols-3 text-center text-xs text-gray-600">
              <span>Deposits</span>
              <span>Withdrawals</span>
              <span>Rewards</span>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Waste Category Prices</h3>
              <span className="text-xs text-gray-500">Rp/kg</span>
            </div>
            <BarChart labels={barLabels} values={barValues} colors={barColors} />
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
            <h3 className="mb-3 font-semibold text-gray-900">Recent Transactions</h3>
            <div className="overflow-hidden rounded-xl border border-emerald-100">
              <table className="w-full text-sm">
                <thead className="bg-emerald-50/60 text-emerald-800">
                  <tr>
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">User</th>
                    <th className="px-4 py-2 text-left">Type</th>
                    <th className="px-4 py-2 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { date: '2025-11-01', user: 'Siti', type: 'Deposit', amount: '+ Rp 55.000' },
                    { date: '2025-11-02', user: 'Budi', type: 'Pickup', amount: '+ Rp 23.000' },
                    { date: '2025-11-03', user: 'Admin', type: 'Reward', amount: '+ 120 pts' },
                    { date: '2025-11-04', user: 'Rani', type: 'Withdrawal', amount: '- Rp 30.000' },
                  ].map((t) => (
                    <tr key={t.date} className="odd:bg-white even:bg-emerald-50/30">
                      <td className="px-4 py-2 text-gray-700">{t.date}</td>
                      <td className="px-4 py-2 text-gray-700">{t.user}</td>
                      <td className="px-4 py-2 text-gray-700">{t.type}</td>
                      <td className="px-4 py-2 text-right font-medium text-gray-900">{t.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
