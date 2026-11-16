import type { ContactPayload } from '~/types'

// PROTOTYPE ONLY: nothing is transmitted or stored.
// Replace the body with a Supabase insert or `$fetch('/api/contact', ...)` when the backend exists.
export const useContactSubmit = () => {
  const submitting = ref(false)
  const submit = async (_payload: ContactPayload) => {
    submitting.value = true
    await new Promise((resolve) => setTimeout(resolve, 700))
    submitting.value = false
  }
  return { submit, submitting }
}
