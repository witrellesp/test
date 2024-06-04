<script setup>
import { ref, onMounted } from 'vue'
import EventPlats from '@/services/EventPlats'

const plats = ref(null)

onMounted(() => {
  EventPlats.getPlats()
    .then((response) => {
      plats.value = response.value
      console.log(plats.value)
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>
<template>
  <ul>
    <li v-for="plat in plats"></li>
  </ul>
</template>
