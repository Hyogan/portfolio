import { Icon } from '@iconify/react'

const links = [
  { href: 'https://github.com/arsenefogue971aa9258',   label: 'GitHub',     icon: 'simple-icons:github'   },
  { href: 'https://linkedin.com/in/arsenefogue971aa9258', label: 'LinkedIn', icon: 'simple-icons:linkedin' },
  { href: 'https://twitter.com/NelsonTiagho',          label: 'X / Twitter', icon: 'simple-icons:x'        },
  { href: 'mailto:tiaghojeux@gmail.com',               label: 'Email',      icon: 'simple-icons:gmail'    },
]

export default function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-4">
      {links.map(({ href, label, icon }) => (
        <a
          key={href}
          href={href}
          aria-label={label}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
          className="text-orange/70 hover:text-orange transition-colors"
        >
          <Icon icon={icon} width={20} height={20} />
        </a>
      ))}
    </div>
  )
}
