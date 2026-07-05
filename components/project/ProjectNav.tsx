import Link from 'next/link'
import Image from 'next/image'

interface ProjectNavProps {
  lang: string
  backLabel: string
}

export default function ProjectNav({ lang, backLabel }: ProjectNavProps) {
  return (
    <header className="flex items-center justify-between py-6">
      <Link href={`/${lang}`} className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
        <Image src="/assets/logo.png" alt="AT" width={28} height={28} className="object-contain" />
        <span className="font-extrabold text-base">
          Arsène<span className="text-orange">.</span>dev
        </span>
      </Link>
      <Link
        href={`/${lang}#projects`}
        className="text-sm font-medium text-fg/55 hover:text-fg transition-colors flex items-center gap-1.5"
      >
        {backLabel}
      </Link>
    </header>
  )
}
