import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectRow from './ProjectRow'
import type { Project } from '@/lib/types/project'

interface ProjectsSectionProps {
  dict: {
    projects: {
      heading: string
      headingAccent: string
    }
  }
  projects: Project[]
  lang: string
}

export default function ProjectsSection({ dict, projects, lang }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-fg/10">
      <RevealWrapper>
        <SectionHeading
          main={dict.projects.heading}
          accent={dict.projects.headingAccent}
          size="large"
          className="mb-14"
        />
      </RevealWrapper>

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <RevealWrapper key={project.slug} delay={0.04 * i}>
            <ProjectRow project={project} lang={lang} />
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}
