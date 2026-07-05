import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/i18n/dictionaries'
import type { Locale } from '@/lib/i18n/dictionaries'
import {
  projects,
  experience,
  education,
  clients,
  testimonials,
  faq,
  techGroups,
  languages,
  navigation,
} from '@/lib/data'

import PillNav         from '@/components/nav/PillNav'
import FloatingCTA     from '@/components/nav/FloatingCTA'
import HeroSection     from '@/components/sections/Hero/HeroSection'
import MarqueeBar      from '@/components/sections/Marquee/MarqueeBar'
import AboutSection    from '@/components/sections/About/AboutSection'
import StackSection    from '@/components/sections/Stack/StackSection'
import ProjectsSection from '@/components/sections/Projects/ProjectsSection'
import ExperienceSection from '@/components/sections/Experience/ExperienceSection'
import EducationSection from '@/components/sections/Education/EducationSection'
import ClientsSection  from '@/components/sections/Clients/ClientsSection'
import TestimonialsSection from '@/components/sections/Testimonials/TestimonialsSection'
import FAQSection      from '@/components/sections/FAQ/FAQSection'
import ContactSection  from '@/components/sections/Contact/ContactSection'
import Footer          from '@/components/footer/Footer'

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  const locale = lang as Locale

  const navItems = navigation.map((item) => ({
    ...item,
    label: dict.nav[item.labelKey.replace('nav.', '') as keyof typeof dict.nav],
  }))

  const marqueeItems = [
    dict.marquee.available,
    dict.marquee.location,
    dict.marquee.role,
    dict.marquee.workLanguages,
  ]

  return (
    <>
      <PillNav items={navItems} />
      <FloatingCTA label={dict.availability.badge} />

      <main className="max-w-6xl mx-auto px-6 lg:px-10">
        <HeroSection dict={dict} />
        <MarqueeBar items={marqueeItems} />
        <AboutSection dict={dict} />
        <StackSection dict={dict} techGroups={techGroups} languages={languages} />
        <ProjectsSection dict={dict} projects={projects} lang={lang} />
        <ExperienceSection dict={dict} experience={experience} lang={locale} />
        <EducationSection dict={dict} education={education} lang={locale} />
        <ClientsSection dict={dict} clients={clients} />
        <TestimonialsSection dict={dict} testimonials={testimonials} lang={locale} />
        <FAQSection dict={dict} faq={faq} lang={locale} />
        <ContactSection dict={dict} />
        <Footer dict={dict} lang={lang} />
      </main>
    </>
  )
}
