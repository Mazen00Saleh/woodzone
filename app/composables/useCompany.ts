import { company } from '~/data/company'

// Data-access layer: swap the body for a Supabase / $fetch call later; callers stay the same.
export const useCompany = () => useAsyncData('company', async () => company)
