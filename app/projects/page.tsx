import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const ALL_PROJECTS = [
  { title: 'Lahore Heights', category: 'Residential', status: 'Completed', location: 'DHA Phase 6, Lahore', year: '2022', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
  { title: 'Bahria Town Expansion', category: 'Residential', status: 'Active', location: 'Bahria Town, Lahore', year: '2024', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800' },
  { title: 'Engineers Town Villa', category: 'Turnkey', status: 'Completed', location: 'Engineers Town, Lahore', year: '2023', img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800' },
  { title: 'Gulberg Commercial Plaza', category: 'Commercial', status: 'Completed', location: 'Gulberg III, Lahore', year: '2021', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' },
  { title: 'Model Town Bungalow', category: 'Renovation', status: 'Completed', location: 'Model Town, Lahore', year: '2023', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800' },
  { title: 'Defence Road Office Block', category: 'Commercial', status: 'Ongoing', location: 'Defence Rd, Lahore', year: '2024', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
  { title: 'DHA Phase 8 Residence', category: 'Residential', status: 'Completed', location: 'DHA Phase 8, Lahore', year: '2020', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
  { title: 'Johar Town Duplex', category: 'Turnkey', status: 'Completed', location: 'Johar Town, Lahore', year: '2022', img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800' },
  { title: 'Wapda Town Farmhouse', category: 'Residential', status: 'Completed', location: 'Wapda Town, Lahore', year: '2021', img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800' },
  { title: 'Liberty Market Renovation', category: 'Renovation', status: 'Completed', location: 'Gulberg, Lahore', year: '2023', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800' },
  { title: 'Cantt Bungalow Extension', category: 'Renovation', status: 'Completed', location: 'Cantt, Lahore', year: '2022', img: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&q=80&w=800' },
  { title: 'Thokar Niaz Baig Complex', category: 'Commercial', status: 'Ongoing', location: 'Thokar Niaz Baig, Lahore', year: '2024', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800' },
]

const STATUS_COLORS: Record<string, string> = {
  Completed: 'bg-green-600/90',
  Active: 'bg-primary/90',
  Ongoing: 'bg-tertiary/90',
}

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Turnkey', 'Renovation']

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <div className="bg-surface-container border-b border-outline-variant py-16">
          <div className="max-w-[1440px] mx-auto px-4 md:px-12">
            <a href="/" className="inline-flex items-center gap-1.5 text-[13px] text-on-surface-variant hover:text-primary mb-6 transition-colors">
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              Back to Home
            </a>
            <span className="block text-primary text-[11px] font-semibold tracking-widest uppercase mb-3">Our Portfolio</span>
            <h1 className="text-[36px] md:text-[52px] font-semibold text-on-surface tracking-tight leading-tight mb-4">
              Our Landmark Projects
            </h1>
            <p className="text-on-surface-variant text-[15px] max-w-2xl leading-relaxed">
              Explore 500+ completed projects across Lahore — where structural integrity meets
              visionary design. 28+ years of engineering excellence built into every home, office,
              and commercial space we deliver.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gc-bg border-b border-outline-variant sticky top-16 z-30">
          <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-4 flex items-center gap-3 overflow-x-auto">
            {CATEGORIES.map(c => (
              <button key={c}
                className="shrink-0 px-5 py-2 rounded-full text-[12px] font-semibold border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors">
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="bg-gc-bg py-12">
          <div className="max-w-[1440px] mx-auto px-4 md:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {ALL_PROJECTS.map(p => (
                <div key={p.title} className="rounded-2xl overflow-hidden border border-outline-variant bg-surface group hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img src={p.img} alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className={`absolute top-3 left-3 ${STATUS_COLORS[p.status] ?? 'bg-primary/90'} text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full`}>
                      {p.status}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-semibold tracking-widest uppercase text-primary">{p.category}</span>
                      <span className="text-[10px] text-on-surface-variant">{p.year}</span>
                    </div>
                    <h3 className="text-on-surface font-semibold text-[14px] mb-1">{p.title}</h3>
                    <div className="flex items-center gap-1 text-on-surface-variant text-[11px]">
                      <span className="material-symbols-outlined text-[13px]">location_on</span>
                      {p.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary py-16">
          <div className="max-w-[1440px] mx-auto px-4 md:px-12 text-center">
            <h2 className="text-[28px] md:text-[36px] font-semibold text-on-primary mb-4">
              Ready to Build Pakistan's Future?
            </h2>
            <p className="text-on-primary/80 text-[15px] mb-8 max-w-xl mx-auto">
              Ghazi Construction provides full-service project management and engineering expertise
              across Lahore. Partner with us for your next landmark venture.
            </p>
            <a href="/#contact"
              className="inline-flex items-center gap-2 bg-tertiary-container text-on-tertiary-container px-8 py-4 rounded-xl text-[15px] font-semibold hover:brightness-110 transition-all">
              Get a Free Quote
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
