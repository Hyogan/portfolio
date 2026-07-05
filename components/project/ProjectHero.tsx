import RevealWrapper from '@/components/ui/RevealWrapper'
import type { Project } from '@/lib/types/project'

interface ProjectHeroProps {
  project: Project
  subtitle: string
  dict: {
    project: {
      activeUsers: string
      storeRating: string
      deliveryTime: string
    }
  }
}

export default function ProjectHero({ project, subtitle, dict }: ProjectHeroProps) {
  const statsMap = [
    { key: 'activeUsers',  label: dict.project.activeUsers,  value: project.stats.activeUsers  },
    { key: 'storeRating',  label: dict.project.storeRating,  value: project.stats.storeRating  },
    { key: 'deliveryTime', label: dict.project.deliveryTime, value: project.stats.deliveryTime },
  ].filter((s) => s.value)

  return (
    <section className="py-10 sm:py-14">
      <RevealWrapper>
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={tag}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                i === 0 ? 'bg-orange/15 text-orange' : 'bg-fg/[0.06] text-fg/60'
              }`}
            >
              {tag}
            </span>
          ))}
          <span className="text-xs text-fg/35">{project.year}</span>
        </div>
      </RevealWrapper>

      <RevealWrapper delay={0.05}>
        <h1
          className="font-black uppercase leading-[0.9] tracking-tight mb-6"
          style={{ fontSize: 'clamp(2.8rem, 10vw, 6.5rem)' }}
        >
          {project.title}
        </h1>
      </RevealWrapper>

      <RevealWrapper delay={0.1}>
        <p className="text-fg/60 text-base sm:text-xl leading-relaxed max-w-2xl mb-10">{subtitle}</p>
      </RevealWrapper>

      {statsMap.length > 0 && (
        <RevealWrapper delay={0.12}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {statsMap.map(({ key, label, value }) => (
              <div key={key} className="bg-fg/[0.04] border border-fg/10 rounded-xl px-5 py-4">
                <p className="font-black text-2xl text-orange">{value}</p>
                <p className="text-xs text-fg/40 mt-1 uppercase tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </RevealWrapper>
      )}
    </section>
  )
}
