<template>
  <div>
    <h3>{{ lost.educattain }}</h3>
    <h2>{{ lost.nycgov_income }}</h2>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const lost = ref([])
async function getPovertyData(nycgov_income) {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/aqqw-n6ec.json')
    const data = await response.json()
    lost.value = data.find((item) => item.nycgov_income === nycgov_income) || {} // Find matching item or default to empty object
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
/* async function getPokemon() {
  try{
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    const data = await response.json()
    pokemon.value = data.results

  } catch (error) {
    console.error('Error fetching pokemon:', error)
  }
} */
/* when this data changes, execute the function */
watch(
  () => route.params.id,
  function (educattain) {
    getPovertyData(educattain)
  },
)
onMounted(function () {
  getPovertyData(route.params.nycgov_income) /* this is a reference to the colon in the router */
})
</script>

<style scoped></style>
