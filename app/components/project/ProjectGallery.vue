<script setup lang="ts">
import type { ProjectImage } from '~/types'

const props = defineProps<{ images: ProjectImage[] }>()
const dialog = ref<HTMLDialogElement>()
const current = ref(0)

const open = (i: number) => {
  current.value = i
  dialog.value?.showModal()
}
const step = (d: number) => (current.value = (current.value + d + props.images.length) % props.images.length)
const onBackdrop = (e: MouseEvent) => {
  if (e.target === dialog.value) dialog.value?.close()
}
</script>

<template>
  <div>
    <div class="grid gap-4 sm:grid-cols-2">
      <button
        v-for="(img, i) in images"
        :key="img.src"
        type="button"
        class="group relative overflow-hidden bg-stone"
        :aria-label="`Enlarge: ${img.alt}`"
        @click="open(i)"
      >
        <img
          :src="img.src"
          :alt="img.alt"
          loading="lazy"
          class="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span class="absolute inset-0 flex items-center justify-center bg-wood/40 text-xs font-medium uppercase tracking-wider text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">Enlarge</span>
      </button>
    </div>

    <dialog
      ref="dialog"
      class="m-auto max-h-[92vh] max-w-[94vw] bg-transparent p-0 backdrop:bg-charcoal/90"
      @click="onBackdrop"
      @keydown.left="step(-1)"
      @keydown.right="step(1)"
    >
      <div class="relative">
        <img :src="images[current]?.src" :alt="images[current]?.alt" class="max-h-[88vh] max-w-[94vw] object-contain" />
        <button
          type="button"
          class="absolute right-3 top-3 bg-ivory px-3 py-1.5 text-xs uppercase tracking-wider text-wood"
          @click="dialog?.close()"
        >
          Close
        </button>
        <template v-if="images.length > 1">
          <button type="button" aria-label="Previous image" class="absolute left-3 top-1/2 bg-ivory px-3 py-2 text-wood" @click="step(-1)">‹</button>
          <button type="button" aria-label="Next image" class="absolute right-3 top-1/2 bg-ivory px-3 py-2 text-wood" @click="step(1)">›</button>
        </template>
      </div>
    </dialog>
  </div>
</template>
