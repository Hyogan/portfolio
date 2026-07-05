'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { contactAction } from '@/lib/actions/contact'
import EmailCopyButton from './EmailCopyButton'

interface ContactFormProps {
  dict: {
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

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-orange text-card-fg font-bold text-sm rounded-xl px-8 py-3.5 hover:bg-fg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? '…' : label}
    </button>
  )
}

const initialState = { success: false, message: '' }

export default function ContactForm({ dict }: ContactFormProps) {
  const [state, formAction] = useActionState(contactAction, initialState)

  const inputClass =
    'bg-surface rounded-xl px-4 py-3.5 text-sm placeholder:text-fg/25 focus:ring-1 focus:ring-orange/50 outline-none transition-all'

  return (
    <form action={formAction} className="grid sm:grid-cols-2 gap-5 max-w-2xl">
      <input name="name"    type="text"  placeholder={dict.namePlaceholder}    required className={inputClass} />
      <input name="email"   type="email" placeholder={dict.emailPlaceholder}   required className={inputClass} />
      <input name="subject" type="text"  placeholder={dict.subjectPlaceholder} className={`sm:col-span-2 ${inputClass}`} />

      <select name="budget" required className={`sm:col-span-2 ${inputClass} text-fg/55`} defaultValue="">
        <option value="" disabled>{dict.budgetPlaceholder}</option>
        {dict.budgets.map((b) => (
          <option key={b} value={b}>{b}</option>
        ))}
      </select>

      <textarea
        name="message"
        placeholder={dict.messagePlaceholder}
        required
        rows={4}
        className={`sm:col-span-2 resize-none ${inputClass}`}
      />

      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <SubmitButton label={dict.submit} />
        <EmailCopyButton email={dict.copyEmail} copiedLabel={dict.copied} />
      </div>

      {state.message && (
        <p className={`sm:col-span-2 text-sm ${state.success ? 'text-lime' : 'text-red-400'}`}>
          {state.success ? dict.successMessage : dict.errorMessage}
        </p>
      )}
    </form>
  )
}
