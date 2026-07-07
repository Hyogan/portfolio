import RevealWrapper from '@/components/ui/RevealWrapper'
import ProfileCard from './ProfileCard'
import HeroStats from './HeroStats'
import HeroCards from './HeroCards'

interface HeroSectionProps {
  dict: {
    hero: {
      heading1: string
      heading2: string
      subtitle: string
      role: string
      bio: string
      stats: {
        years: string
        yearsLabel: string
        projects: string
        projectsLabel: string
        clients: string
        clientsLabel: string
        languages: string
        languagesLabel: string
      }
      ctaStack: string
      ctaProjects: string
    }
  }
}

export default function HeroSection({ dict }: HeroSectionProps) {
  const { hero } = dict

  const stats = [
    { value: hero.stats.years,     label: hero.stats.yearsLabel     },
    { value: hero.stats.projects,  label: hero.stats.projectsLabel  },
    { value: hero.stats.clients,   label: hero.stats.clientsLabel   },
    { value: hero.stats.languages, label: hero.stats.languagesLabel },
  ]

  return (
    <section id="home" className="pt-28 sm:pt-36 pb-16">
      <div className="grid items-center justify-center lg:grid-cols-[320px_1fr] gap-10 lg:gap-14">

        <RevealWrapper delay={0}>
          <ProfileCard role={hero.role} bio={hero.bio} />
        </RevealWrapper>

        <div>
          <RevealWrapper delay={0.05}>
            <h2
              className="font-black uppercase leading-[0.92] tracking-tight"
              style={{ fontSize: 'clamp(2.6rem, 7vw, 5rem)' }}
            >
              <span className="block text-fg">{hero.heading1}</span>
              <span className="block text-ghost">{hero.heading2}</span>
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={0.1}>
            <p className="text-fg/55 leading-relaxed max-w-md mt-6 mb-8 text-base sm:text-lg">
              {hero.subtitle}
            </p>
          </RevealWrapper>

          <RevealWrapper delay={0.12}>
            <HeroStats stats={stats} />
          </RevealWrapper>

          <RevealWrapper delay={0.15}>
            <HeroCards stackLabel={hero.ctaStack} projectsLabel={hero.ctaProjects} />
          </RevealWrapper>
        </div>

      </div>
    </section>
  )
}
