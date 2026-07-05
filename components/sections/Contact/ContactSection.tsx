import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import ContactForm from './ContactForm'

interface ContactSectionProps {
  dict: {
    contact: {
      heading: string
      headingAccent: string
      subtitle: string
      namePlaceholder: string
      emailPlaceholder: string
      subjectPlaceholder: string
      budgetPlaceholder: string
      budgets: string[]
      messagePlaceholder: string
      submit: string
      copyEmail: string
      copied: string
      successMessage: string
      errorMessage: string
    }
  }
}

export default function ContactSection({ dict }: ContactSectionProps) {
  const { contact } = dict

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-fg/10">
      <RevealWrapper>
        <SectionHeading main={contact.heading} accent={contact.headingAccent} size="default" className="mb-4" />
        <p className="text-fg/45 mb-10 text-sm">{contact.subtitle}</p>
      </RevealWrapper>

      <RevealWrapper delay={0.05}>
        <ContactForm dict={contact} />
      </RevealWrapper>
    </section>
  )
}
