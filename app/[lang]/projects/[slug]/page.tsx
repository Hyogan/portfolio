import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/i18n/dictionaries'
import type { Locale } from '@/lib/i18n/dictionaries'
import { projects } from '@/lib/data'
import ThemeProvider from '@/components/providers/ThemeProvider'
import ProjectNav from '@/components/project/ProjectNav'
import ProjectHero from '@/components/project/ProjectHero'
import ProjectSection from '@/components/project/ProjectSection'
import BrowserMockup from '@/components/project/BrowserMockup'
import PhoneMockup from '@/components/project/PhoneMockup'
import TechPill from '@/components/sections/Experience/TechPill'
import Link from 'next/link'

export async function generateStaticParams() {
  return projects.flatMap((p) =>
    ['fr', 'en', 'es'].map((lang) => ({ lang, slug: p.slug }))
  )
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params

  if (!hasLocale(lang)) notFound()

  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const dict = await getDictionary(lang)
  const locale = lang as Locale
  const sections = project.sections[locale]

  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length]

  return (
    <ThemeProvider>
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <ProjectNav lang={lang} backLabel={dict.project.back} />

        <ProjectHero project={project} subtitle={project.subtitle} dict={dict} />

        {/* Mockups — Finovo only */}
        {project.slug === 'finovo' && (
          <div className="flex flex-col sm:flex-row gap-6 items-start mb-16">
            <BrowserMockup url="finovo.app/dashboard">
              <div className="p-4" style={{ minHeight: 220 }}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="h-3 w-24 bg-fg/20 rounded mb-1.5" />
                    <div className="h-5 w-36 rounded text-[10px] font-bold flex items-center px-2 text-card-fg" style={{ background: '#efb63f' }}>
                      Budget Mai 2025
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-7 w-16 bg-fg/[0.06] border border-fg/10 rounded-md" />
                    <div className="h-7 w-20 rounded-md flex items-center justify-center text-[10px] font-bold text-[#111]" style={{ background: '#efb63f' }}>
                      + Dépense
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[['bg-fg/70', ''], ['rgba(239,182,63,0.6)', 'w-14'], ['bg-green-400/60', 'w-12']].map(([bg, w], i) => (
                    <div key={i} className="bg-fg/[0.04] border border-fg/10 rounded-lg p-2.5">
                      <div className="h-2 w-10 bg-fg/20 rounded mb-2" />
                      <div className={`h-4 ${w || 'w-16'} rounded`} style={bg.startsWith('rgba') ? { background: bg } : undefined} />
                    </div>
                  ))}
                </div>
                <div className="flex items-end gap-1.5 h-16 px-2">
                  {[45, 70, 55, 90, 60, 40, 75].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i === 3 ? '#efb63f' : `rgba(239,182,63,${0.4 + h / 250})` }} />
                  ))}
                </div>
              </div>
            </BrowserMockup>

            <PhoneMockup>
              <div className="px-3 pt-3 pb-4" style={{ minHeight: 280 }}>
                <div className="text-[10px] font-bold text-fg/40 uppercase tracking-wide mb-2">Finovo</div>
                <div className="rounded-xl p-3 mb-2" style={{ background: 'rgba(239,182,63,0.12)', border: '1px solid rgba(239,182,63,0.25)' }}>
                  <div className="text-[9px] text-fg/40 mb-1">Solde ce mois</div>
                  <div className="text-base font-black text-orange">152 500 FCFA</div>
                  <div className="text-[9px] text-fg/35 mt-0.5">sur 250 000 FCFA budgétés</div>
                  <div className="mt-2 h-1.5 rounded-full bg-fg/10 overflow-hidden">
                    <div className="h-full rounded-full bg-orange" style={{ width: '61%' }} />
                  </div>
                </div>
                <div className="text-[9px] font-bold text-fg/35 uppercase tracking-wide mb-2">Dépenses récentes</div>
                {[['🍕', 'Nourriture', '−8 500'], ['⚡', 'Électricité', '−12 000'], ['🛒', 'Courses', '−22 300']].map(([emoji, label, amount]) => (
                  <div key={label} className="flex items-center justify-between bg-fg/[0.04] rounded-lg px-2.5 py-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="h-5 w-5 rounded-md bg-orange/20 flex items-center justify-center text-[10px]">{emoji}</span>
                      <span className="text-[10px] text-fg/70">{label}</span>
                    </div>
                    <span className="text-[10px] font-semibold text-fg/70">{amount}</span>
                  </div>
                ))}
                <div className="mt-3 w-full rounded-lg py-2 text-center text-[10px] font-bold text-[#111]" style={{ background: '#efb63f' }}>
                  + Ajouter une dépense
                </div>
              </div>
            </PhoneMockup>
          </div>
        )}

        {/* Context */}
        <ProjectSection number="01" label={dict.project.labelContext} heading="Le problème">
          <p className="text-fg/55 leading-relaxed text-sm sm:text-base">{sections.context}</p>
        </ProjectSection>

        {/* Solution */}
        <ProjectSection number="02" label={dict.project.labelSolution} heading="Ce que j'ai construit">
          <p className="text-fg/55 leading-relaxed text-sm sm:text-base">{sections.solution}</p>
        </ProjectSection>

        {/* Architecture */}
        <ProjectSection number="03" label={dict.project.labelArchitecture} heading={dict.project.whyChoices}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {['Mobile', 'Frontend', 'Backend', 'Database'].map((cat) => (
              <div key={cat} className="bg-fg/[0.04] border border-fg/10 rounded-xl p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-fg/35 mb-3">{cat}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack
                    .filter(() => true)
                    .slice(0, 2)
                    .map((name) => (
                      <TechPill key={name} name={name} />
                    ))}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-fg/[0.03] border border-fg/8 rounded-2xl p-6 sm:p-8">
            <p className="text-sm text-fg/55 leading-relaxed">{sections.architecture}</p>
          </div>
        </ProjectSection>

        {/* Challenges */}
        <ProjectSection number="04" label={dict.project.labelChallenges} heading="Ce qui était difficile">
          <div className="grid sm:grid-cols-3 gap-5">
            {sections.challenges.map((c, i) => {
              const [title, ...rest] = c.split(':')
              return (
                <div key={i} className="bg-fg/[0.04] border border-fg/10 rounded-xl p-5">
                  <p className="font-bold mb-2">{rest.length ? title : 'Défi'}</p>
                  <p className="text-sm text-fg/50 leading-relaxed">{rest.length ? rest.join(':').trim() : c}</p>
                </div>
              )
            })}
          </div>
        </ProjectSection>

        {/* Results */}
        <ProjectSection number="05" label={dict.project.labelResults} heading="Ce que ça a donné">
          <div className="flex flex-col gap-4 max-w-2xl">
            {sections.results.map((r, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="h-6 w-6 rounded-full bg-orange/15 text-orange flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <p className="text-fg/65 leading-relaxed text-sm sm:text-base">{r}</p>
              </div>
            ))}
          </div>
        </ProjectSection>

        {/* Next project + CTA */}
        <section className="py-12 sm:py-16 border-t border-fg/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-fg/35 mb-2">{dict.project.nextProject}</p>
              <Link href={`/${lang}/projects/${nextProject.slug}`} className="font-black text-2xl sm:text-3xl hover:text-orange transition-colors">
                {nextProject.title} →
              </Link>
            </div>
            <Link
              href={`/${lang}#contact`}
              className="inline-flex items-center gap-2 bg-orange text-card-fg font-bold text-sm px-7 py-4 rounded-full hover:bg-fg transition-colors"
            >
              {dict.project.cta}
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-fg/10 py-6 flex items-center justify-between text-xs text-fg/30">
          <span>{dict.footer.copyright}</span>
          <Link href={`/${lang}`} className="hover:text-fg transition-colors">← Portfolio</Link>
        </footer>
      </div>
    </ThemeProvider>
  )
}
