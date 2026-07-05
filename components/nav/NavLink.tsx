interface NavLinkProps {
  href: string
  label: string
  children: React.ReactNode
}

export default function NavLink({ href, label, children }: NavLinkProps) {
  return (
    <a
      href={href}
      title={label}
      className="group relative flex h-10 w-10 items-center justify-center rounded-full text-fg/60 transition-colors hover:bg-fg/8 hover:text-fg"
    >
      {children}
      <span className="pointer-events-none absolute top-full mt-2 hidden rounded-md bg-surface px-2 py-1 text-xs font-medium text-fg shadow-lg group-hover:block whitespace-nowrap border border-fg/10">
        {label}
      </span>
    </a>
  )
}
