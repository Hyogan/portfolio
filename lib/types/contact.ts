export interface ContactFormState {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

export interface ContactInput {
  name: string
  email: string
  subject: string
  budget: string
  message: string
}
