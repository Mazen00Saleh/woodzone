<script setup lang="ts">
// Subtle fade/slide-in on scroll (fade only when the user prefers reduced motion). Content is visible on the server and without JS;
// it is only hidden after mount, and only when it starts below the fold.
const props = withDefaults(defineProps<{ delay?: number }>(), { delay: 0 })
const el = ref<HTMLElement>()
const hidden = ref(false)

onMounted(() => {
  const node = el.value
  if (!node) return
  if (node.getBoundingClientRect().top < window.innerHeight) return
  hidden.value = true
  const io = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        hidden.value = false
        io.disconnect()
      }
    },
    { threshold: 0.12 }
  )
  io.observe(node)
  onBeforeUnmount(() => io.disconnect())
})
</script>

<template>
  <div
    ref="el"
    class="transition-all duration-700 ease-out"
    :class="hidden ? 'translate-y-6 opacity-0 motion-reduce:translate-y-0' : 'translate-y-0 opacity-100'"
    :style="{ transitionDelay: `${props.delay}ms` }"
  >
    <slot />
  </div>
</template>
