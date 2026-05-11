const stats = [
  { value: '15+',   label: 'Years Experience'    },
  { value: '50+',   label: 'Projects Completed'  },
  { value: '₨2.5B+', label: 'Asset Value Delivered' },
  { value: '100%',  label: 'Safety Compliance'   },
]

export default function Stats() {
  return (
    <section className="bg-surface-container border-b border-outline-variant py-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <div className="text-primary text-[32px] font-semibold tracking-tight leading-10">
                {s.value}
              </div>
              <div className="text-on-surface-variant text-[14px] font-semibold tracking-widest uppercase mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
