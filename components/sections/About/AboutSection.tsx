import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import AboutMeta from './AboutMeta'

interface AboutSectionProps {
  dict: {
    about: {
      heading: string
      headingAccent: string
      bio1: string
      bio2: string
      bio3: string
      locationLabel: string
      location: string
      availabilityLabel: string
      availability: string
      languagesLabel: string
      spokenLanguages: string
      licenseLabel: string
      license: string
      softSkillsLabel: string
      softSkills: string
    }
  }
}

export default function AboutSection({ dict }: AboutSectionProps) {
  const { about } = dict

  const metaItems = [
    { label: about.locationLabel,     value: about.location,        highlight: false },
    { label: about.availabilityLabel, value: about.availability,    highlight: true  },
    { label: about.languagesLabel,    value: about.spokenLanguages, highlight: false },
    { label: about.licenseLabel,      value: about.license,         highlight: false },
    { label: about.softSkillsLabel,   value: about.softSkills,      highlight: false },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 border-t border-fg/10">
      <RevealWrapper>
        <SectionHeading main={about.heading} accent={about.headingAccent} className="mb-12" />
      </RevealWrapper>

      <div className="grid sm:grid-cols-[1fr_auto] gap-10 sm:gap-16 items-start">
        <RevealWrapper delay={0.05}>
          <div className="space-y-5">
            <p
              className="text-fg/70 leading-relaxed text-base sm:text-lg"
              dangerouslySetInnerHTML={{ __html: about.bio1 }}
            />
            <p className="text-fg/55 leading-relaxed text-sm sm:text-base">{about.bio2}</p>
            <p className="text-fg/55 leading-relaxed text-sm sm:text-base">{about.bio3}</p>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={0.1}>
          <AboutMeta items={metaItems} />
        </RevealWrapper>
      </div>
    </section>
  )
}
