import { Resend } from 'resend'
import { z } from 'zod'
import type { ContactFormState } from '@/lib/types/contact'

const resend = new Resend(process.env.RESEND_API_KEY)

export const ContactSchema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters'),
  email:   z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  budget:  z.string().min(1, 'Please select a budget'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function sendContactEmail(formData: FormData): Promise<ContactFormState> {
  const raw = {
    name:    formData.get('name'),
    email:   formData.get('email'),
    subject: formData.get('subject'),
    budget:  formData.get('budget'),
    message: formData.get('message'),
  }

  const parsed = ContactSchema.safeParse(raw)

  if (!parsed.success) {
    return {
      success: false,
      message: 'Validation failed',
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    }
  }

  const { name, email, subject, budget, message } = parsed.data

  const { error } = await resend.emails.send({
    from:    'Portfolio <onboarding@resend.dev>',
    to:      'tiaghojeux@gmail.com',
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: [
      `De : ${name} <${email}>`,
      `Budget : ${budget}`,
      '',
      message,
    ].join('\n'),
  })

  if (error) {
    return { success: false, message: 'Email sending failed. Please try again.' }
  }

  return { success: true, message: '✓ Message received,  Arsène will reply soon!' }
}
