'use server'

import { sendContactEmail } from '@/lib/services/email'
import type { ContactFormState } from '@/lib/types/contact'

export async function contactAction(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  return sendContactEmail(formData)
}
