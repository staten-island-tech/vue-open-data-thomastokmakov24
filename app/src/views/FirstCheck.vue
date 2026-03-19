<template>
  <div>
    <DefMe v-for="(mon, index) in lost" :key = "index" :lost="mon" :id="index+1"/>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import DefMe from '@/components/DefMe.vue'
const lost = ref([])
async function GetStats() {
  try{
    const response = await fetch('https://data.cityofnewyork.us/resource/aqqw-n6ec.json')
    const data = await response.json()
    lost.value = data

  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
/* an aroow function is it is  simpler and second is that it automatcaiullly returns whatever */
onMounted(() => {
  GetStats()
})

</script>

<style scoped>

</style>
