import Link from 'next/link';

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-500/20 via-brand-500/5 to-transparent blur-3xl" />
        <div className="container-responsive section-padding">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm text-white/90 ring-1 ring-white/20">
              Performance-first marketing studio
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl drop-shadow-glow">
              DREAM FINDS COMPANY
            </h1>
            <p className="mt-6 text-lg text-white/80">
              We build compounding growth systems for ambitious brands through performance creative, SEO, and paid media. Our frameworks turn attention into revenue.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#contact" className="btn-primary">Start a project</Link>
              <Link href="#services" className="btn-secondary">Explore services</Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 text-white/80 sm:grid-cols-3">
              {[
                'Avg. 3.4x ROAS in 90 days',
                'SEO traffic +120% YoY',
                '50+ growth experiments/quarter',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckIcon className="mt-1 h-5 w-5 text-brand-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding">
        <div className="container-responsive">
          <h2 className="text-3xl font-bold sm:text-4xl">What we do</h2>
          <p className="mt-3 max-w-2xl text-white/80">
            Integrated growth across the entire funnel. Strategy, execution, and iteration under one roof.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Performance Creative',
                desc: 'High-velocity ad creative powered by insights and controlled experiments.',
                points: ['Creative systems', 'UGC + motion', 'Iterative testing'],
              },
              {
                title: 'Paid Media',
                desc: 'ROI-focused buying across Meta, Google, TikTok, and YouTube.',
                points: ['Cross-channel mix', 'Bid + budget ops', 'Full-funnel tracking'],
              },
              {
                title: 'SEO + Content',
                desc: 'Compounding organic growth with technical SEO and content engines.',
                points: ['Topic authority', 'Technical SEO', 'Content operations'],
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-2 text-white/80">{card.desc}</p>
                <ul className="mt-4 space-y-2 text-white/80">
                  {card.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white/5">
        <div className="container-responsive">
          <h2 className="text-3xl font-bold sm:text-4xl">Selected outcomes</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                kpi: '+184% CTR',
                title: 'Creative system overhaul for DTC apparel',
                desc: 'Built a modular creative engine and testing program. 3.1x ROAS in 60 days.',
              },
              {
                kpi: '+129% organic',
                title: 'SEO migration for fintech SaaS',
                desc: 'Technical audit, IA redesign, and content ops. Traffic doubled in 5 months.',
              },
            ].map((cs) => (
              <div key={cs.title} className="rounded-2xl border border-white/10 bg-night p-6">
                <div className="text-brand-400 font-semibold">{cs.kpi}</div>
                <h3 className="mt-2 text-xl font-semibold">{cs.title}</h3>
                <p className="mt-2 text-white/80">{cs.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding">
        <div className="container-responsive">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Let’s build your growth engine</h2>
              <p className="mt-3 text-white/80">Tell us about your goals. We’ll get back within 1 business day.</p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
                <p className="font-semibold">DREAM FINDS COMPANY</p>
                <p>Monday–Friday · 9am–6pm</p>
                <p>Worldwide, remote-first</p>
              </div>
            </div>
            <form className="rounded-2xl border border-white/10 bg-white/5 p-6" action="/api/contact" method="post">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="block text-sm text-white/80">Your name</label>
                  <input name="name" required className="mt-1 w-full rounded-lg bg-white/10 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-brand-400" />
                </div>
                <div>
                  <label className="block text-sm text-white/80">Email</label>
                  <input type="email" name="email" required className="mt-1 w-full rounded-lg bg-white/10 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-brand-400" />
                </div>
                <div>
                  <label className="block text-sm text-white/80">Company</label>
                  <input name="company" className="mt-1 w-full rounded-lg bg-white/10 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-brand-400" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-white/80">Budget</label>
                  <select name="budget" className="mt-1 w-full rounded-lg bg-white/10 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-brand-400">
                    <option value="<10k">Less than $10k</option>
                    <option value="10-25k">$10k–$25k</option>
                    <option value=">25k">More than $25k</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-white/80">What do you want to achieve?</label>
                  <textarea name="message" rows={5} required className="mt-1 w-full rounded-lg bg-white/10 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-brand-400" />
                </div>
              </div>
              <button className="btn-primary mt-6 w-full sm:w-auto" type="submit">Send message</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
