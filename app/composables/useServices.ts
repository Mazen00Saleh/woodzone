import { services } from '~/data/services'

export const useServices = () => useAsyncData('services', async () => services)
