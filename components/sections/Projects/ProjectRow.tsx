import Link from 'next/link'
import ProjectThumb from './ProjectThumb'
import type { Project } from '@/lib/types/project'

interface ProjectRowProps {
  project: Project
  lang: string
}

export default function ProjectRow({ project, lang }: ProjectRowProps) {
  const isComingSoon = !project.sections.fr.context

  if (isComingSoon) {
    return (
      <div className="flex items-center gap-5 sm:gap-8 py-6 border-b border-fg/10 opacity-50 cursor-default">
        <ProjectThumb slug={project.slug} color={project.thumbColor} type={project.type} />
        <div className="flex-1">
          <span className="text-xs font-semibold text-orange/80 uppercase tracking-wide">
            {project.tags[0]} · {project.year}
          </span>
          <p className="font-extrabold text-xl sm:text-2xl mt-1">{project.title}</p>
          <p className="text-sm text-fg/45 mt-1">{project.stack.join(', ')}</p>
        </div>
        <span className="shrink-0 text-2xl text-fg/20">↗</span>
      </div>
    )
  }

  return (
    <Link
      href={`/${lang}/projects/${project.slug}`}
      className="group flex items-center gap-5 sm:gap-8 py-6 border-b border-fg/10"
    >
      <ProjectThumb slug={project.slug} color={project.thumbColor} type={project.type} />
      <div className="flex-1">
        <span className="text-xs font-semibold text-orange/80 uppercase tracking-wide">
          {project.tags[0]} · {project.year}
        </span>
        <p className="font-extrabold text-xl sm:text-2xl mt-1">{project.title}</p>
        <p className="text-sm text-fg/45 mt-1">{project.subtitle}</p>
      </div>
      <span className="shrink-0 text-2xl text-fg/30 transition-colors group-hover:text-orange">↗</span>
    </Link>
  )
}
