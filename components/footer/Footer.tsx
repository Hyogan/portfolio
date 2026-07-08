import FooterCopyright from './FooterCopyright'
import Logo from '@/components/ui/Logo'

interface FooterProps {
  dict: {
    footer: {
      tagline: string
      navLabel: string
      contactLabel: string
      phone: string
      copyright: string
    }
    nav: {
      about: string
      stack: string
      projects: string
      experience: string
      faq: string
    }
  }
  lang: string
}

const navLinks = [
  { href: '#about',      key: 'about'      },
  { href: '#stack',      key: 'stack'      },
  { href: '#projects',   key: 'projects'   },
  { href: '#experience', key: 'experience' },
  { href: '#faq',        key: 'faq'        },
] as const

export default function Footer({ dict, lang }: FooterProps) {
  void lang

  return (
    <>
      <footer className="border-t border-fg/10 py-10 grid sm:grid-cols-3 gap-8 text-sm">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Logo size={28} className="object-contain" />
            <p className="font-extrabold text-base">
              Arsène<span className="text-orange">.</span>dev
            </p>
          </div>
          <p className="text-fg/40 text-xs leading-relaxed whitespace-pre-line">{dict.footer.tagline}</p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-fg/30 mb-3">{dict.footer.navLabel}</p>
          <div className="flex flex-col gap-2 text-fg/55">
            {navLinks.map(({ href, key }) => (
              <a key={href} href={href} className="hover:text-fg transition-colors text-xs">
                {dict.nav[key]}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-fg/30 mb-3">{dict.footer.contactLabel}</p>
          <div className="flex flex-col gap-2 text-fg/55">
            <a href="mailto:tiaghojeux@gmail.com" className="hover:text-fg transition-colors text-xs">tiaghojeux@gmail.com</a>
            <a href="tel:+237651858890" className="hover:text-fg transition-colors text-xs">{dict.footer.phone}</a>
            <a href="https://github.com/Hyogan" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors text-xs">GitHub</a>
            <a href="https://linkedin.com/in/arsene-fogue" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors text-xs">LinkedIn</a>
          </div>
        </div>
      </footer>

      <FooterCopyright text={dict.footer.copyright} />
    </>
  )
}
