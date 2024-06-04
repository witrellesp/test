<script setup>
import { ref, onMounted } from 'vue'
import EventPlats from '@/services/EventPlats'

const plats = ref(null)

onMounted(() => {
  EventPlats.getPlats()
    .then((response) => {
      plats.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>
<template>
  <ul>
    <li v-for="plat in plats" v-bind:key="plat.id">{{ plat.nomPlat }}</li>
    <li v-for="plat in plats">{{ plat.allergicIngredients.name }}</li>
  </ul>
</template>
