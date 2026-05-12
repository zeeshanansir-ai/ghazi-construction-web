const LEDGER = [
  { date: 'Nov 24, 2024', desc: 'Structural Steel Consignment #402', vendor: 'Capital Steel Pvt. Ltd.', cat: 'Materials',  amount: '-PKR 4,230,000', type: 'debit'  },
  { date: 'Nov 20, 2024', desc: 'Client Payment — Bahria Villa Phase 1', vendor: 'Private Client',       cat: 'Revenue',   amount: '+PKR 7,500,000', type: 'credit' },
  { date: 'Nov 18, 2024', desc: 'Labour Wages — Week 46',              vendor: 'Site Team A',           cat: 'Labour',    amount: '-PKR 1,850,000', type: 'debit'  },
  { date: 'Nov 15, 2024', desc: 'Equipment Rental — Crane',             vendor: 'Pak Machinery',        cat: 'Equipment', amount: '-PKR 890,000',   type: 'debit'  },
  { date: 'Nov 10, 2024', desc: 'Client Payment — DHA Duplex',          vendor: 'Mr. Salman Qureshi',   cat: 'Revenue',   amount: '+PKR 3,200,000', type: 'credit' },
  { date: 'Nov 7, 2024',  desc: 'Cement & Sand Delivery #88',           vendor: 'Kohinoor Suppliers',   cat: 'Materials', amount: '-PKR 620,000',   type: 'debit'  },
]

const BUDGETS = [
  { label: 'Material Procurement',   pct: 72, color: 'bg-primary' },
  { label: 'Labour & Engineering',   pct: 45, color: 'bg-tertiary' },
  { label: 'Equipment Rental',       pct: 105, color: 'bg-error' },
  { label: 'Admin & Overhead',       pct: 38, color: 'bg-secondary' },
]

export default function FinancePage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-[22px] font-semibold text-on-surface">Financial Command Center</h2>
        <p className="text-on-surface-variant text-[13px] mt-1">Real-time fiscal oversight and material logistics tracking.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Allocation',  value: 'PKR 1.24 Cr', icon: 'account_balance' },
          { label: 'Current Spending',  value: 'PKR 0.89 Cr', icon: 'payments' },
          { label: 'Remaining Balance', value: 'PKR 0.35 Cr', icon: 'savings' },
          { label: 'Active Invoices',   value: '14',          icon: 'receipt_long' },
        ].map(m => (
          <div key={m.label} className="bg-surface rounded-2xl border border-outline-variant p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-primary text-[20px]">{m.icon}</span>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-on-surface-variant">{m.label}</span>
            </div>
            <div className="text-[22px] font-semibold text-on-surface">{m.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Budget Utilization */}
        <div className="bg-surface rounded-2xl border border-outline-variant p-6">
          <h3 className="font-semibold text-[15px] text-on-surface mb-6">Project Budget Utilization</h3>
          <div className="space-y-5">
            {BUDGETS.map(b => (
              <div key={b.label}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[13px] text-on-surface">{b.label}</span>
                  <span className={`text-[12px] font-semibold ${b.pct > 100 ? 'text-error' : 'text-on-surface-variant'}`}>
                    {b.pct}% of budget
                  </span>
                </div>
                <div className="bg-surface-container rounded-full h-2">
                  <div className={`${b.color} h-2 rounded-full transition-all`} style={{ width: `${Math.min(b.pct, 100)}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Invoice Distribution */}
        <div className="bg-surface rounded-2xl border border-outline-variant p-6">
          <h3 className="font-semibold text-[15px] text-on-surface mb-6">Invoice Distribution</h3>
          <div className="space-y-3">
            {[
              { status: 'Paid',     count: 8,  color: 'bg-green-500' },
              { status: 'Pending',  count: 4,  color: 'bg-yellow-500' },
              { status: 'Overdue',  count: 2,  color: 'bg-error' },
            ].map(i => (
              <div key={i.status} className="flex items-center gap-4">
                <div className={`w-2.5 h-2.5 rounded-full ${i.color} shrink-0`} />
                <div className="flex-1 text-[13px] text-on-surface">{i.status}</div>
                <div className="text-[13px] font-semibold text-on-surface">{i.count} invoices</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ledger */}
      <div className="bg-surface rounded-2xl border border-outline-variant">
        <div className="flex items-center justify-between p-5 border-b border-outline-variant">
          <h3 className="font-semibold text-[15px] text-on-surface">Comprehensive Ledger</h3>
          <button className="flex items-center gap-1.5 text-[12px] text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[16px]">filter_list</span>
            Filter
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-outline-variant bg-surface-container">
                {['Date', 'Description', 'Category', 'Amount'].map(h => (
                  <th key={h} className="text-left px-5 py-3 text-[11px] font-semibold tracking-widest uppercase text-on-surface-variant">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {LEDGER.map((r, i) => (
                <tr key={i} className="hover:bg-surface-container transition-colors">
                  <td className="px-5 py-3.5 text-on-surface-variant whitespace-nowrap">{r.date}</td>
                  <td className="px-5 py-3.5">
                    <div className="text-on-surface font-medium">{r.desc}</div>
                    <div className="text-[11px] text-on-surface-variant">{r.vendor}</div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="px-2.5 py-1 bg-surface-container rounded-full text-[10px] font-semibold text-on-surface-variant">
                      {r.cat}
                    </span>
                  </td>
                  <td className={`px-5 py-3.5 font-semibold whitespace-nowrap ${r.type === 'credit' ? 'text-green-600' : 'text-error'}`}>
                    {r.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
