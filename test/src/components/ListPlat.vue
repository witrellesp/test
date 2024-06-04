<script setup>
import { ref, onMounted } from 'vue'
import EventPlats from '@/services/EventPlats'

const plats = ref(null)

onMounted(() => {
  EventPlats.getPlats()
    .then((response) => {
      plats.value = response.value
    })
    .catch((error) => {
      console.log(error)
    })
})

console.log(plats.value)
</script>
<template>
  <ul>
    <li v-for="plat in plats">{{ plat }}</li>
  </ul>
</template>
