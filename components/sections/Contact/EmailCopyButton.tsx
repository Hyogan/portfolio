'use client'

import { useState } from 'react'

interface EmailCopyButtonProps {
  email: string
  copiedLabel: string
}

export default function EmailCopyButton({ email, copiedLabel }: EmailCopyButtonProps) {
  const [copied, setCopied] = useState(false)

  async function handleClick() {
    await navigator.clipboard.writeText(email).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex items-center gap-2 text-sm font-medium border border-fg/15 rounded-xl px-5 py-3.5 hover:border-fg/40 transition-colors"
    >
      {copied ? copiedLabel : email}
    </button>
  )
}
