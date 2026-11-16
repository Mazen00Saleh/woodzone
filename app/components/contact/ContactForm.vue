<script setup lang="ts">
import type { ContactPayload } from '~/types'

const { data: services } = await useServices()
const { submit, submitting } = useContactSubmit()

const blank = (): ContactPayload => ({ name: '', email: '', phone: '', service: '', message: '' })
const form = reactive<ContactPayload>(blank())
const errors = reactive<Partial<Record<keyof ContactPayload, string>>>({})
const sent = ref(false)

const validate = () => {
  const e: typeof errors = {}
  if (form.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.'
  if (form.phone && !/^[+\d][\d\s()-]{6,}$/.test(form.phone)) e.phone = 'Please enter a valid phone number.'
  if (form.message.trim().length < 10) e.message = 'Please tell us a little about your project (10+ characters).'
  Object.keys(errors).forEach((k) => delete errors[k as keyof ContactPayload])
  Object.assign(errors, e)
  return Object.keys(e).length === 0
}

const onSubmit = async () => {
  if (!validate()) return
  await submit({ ...form })
  Object.assign(form, blank())
  sent.value = true
}

const field = 'w-full border border-stone bg-white px-4 py-3 text-charcoal transition-colors focus:border-wood focus:outline-none'
</script>

<template>
  <div v-if="sent" class="border border-stone bg-white p-8 sm:p-10" role="status">
    <h2 class="text-3xl">Thank you</h2>
    <p class="mt-4 text-charcoal/80">Your enquiry has been captured in this demonstration.</p>
    <p class="mt-2 text-sm text-charcoal/60">Prototype notice: no data is sent or stored. A live version will deliver enquiries to the Wood Zone team.</p>
    <BaseButton variant="outline" class="mt-8" @click="sent = false">Send another enquiry</BaseButton>
  </div>

  <form v-else novalidate class="space-y-6" @submit.prevent="onSubmit">
    <div class="grid gap-6 sm:grid-cols-2">
      <div>
        <label for="name" class="eyebrow mb-2 block">Name *</label>
        <input id="name" v-model="form.name" :class="field" autocomplete="name" :aria-invalid="!!errors.name" aria-describedby="name-err" />
        <p id="name-err" class="mt-1 min-h-5 text-sm text-red-700">{{ errors.name }}</p>
      </div>
      <div>
        <label for="email" class="eyebrow mb-2 block">Email *</label>
        <input id="email" v-model="form.email" type="email" :class="field" autocomplete="email" :aria-invalid="!!errors.email" aria-describedby="email-err" />
        <p id="email-err" class="mt-1 min-h-5 text-sm text-red-700">{{ errors.email }}</p>
      </div>
      <div>
        <label for="phone" class="eyebrow mb-2 block">Phone</label>
        <input id="phone" v-model="form.phone" type="tel" :class="field" autocomplete="tel" :aria-invalid="!!errors.phone" aria-describedby="phone-err" />
        <p id="phone-err" class="mt-1 min-h-5 text-sm text-red-700">{{ errors.phone }}</p>
      </div>
      <div>
        <label for="service" class="eyebrow mb-2 block">Service</label>
        <select id="service" v-model="form.service" :class="field">
          <option value="">Select a service</option>
          <option v-for="s in services" :key="s.slug" :value="s.title">{{ s.title }}</option>
        </select>
        <p class="mt-1 min-h-5" />
      </div>
    </div>
    <div>
      <label for="message" class="eyebrow mb-2 block">Project details *</label>
      <textarea id="message" v-model="form.message" rows="6" :class="field" :aria-invalid="!!errors.message" aria-describedby="message-err" />
      <p id="message-err" class="mt-1 min-h-5 text-sm text-red-700">{{ errors.message }}</p>
    </div>
    <BaseButton type="submit" :disabled="submitting" class="disabled:opacity-60">
      {{ submitting ? 'Sending…' : 'Send enquiry' }}
    </BaseButton>
  </form>
</template>
