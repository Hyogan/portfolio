interface FooterCopyrightProps {
  text: string
}

export default function FooterCopyright({ text }: FooterCopyrightProps) {
  return (
    <div className="text-center text-xs text-fg/25 pb-8">
      {text}
    </div>
  )
}
