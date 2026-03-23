<template>
    <div>
        <h1>{{lost.educattain}}</h1>
        <h2>{{lost.esr}}</h2>
    </div>
</template>

<script setup>
import {onMounted, ref, watch} from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const lost = ref([])
async function getPovertyData(esr) {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/aqqw-n6ec.json')
    const data = await response.json()
    lost.value = data.find(item => item.esr === esr) || {}  // Find matching item or default to empty object
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
watch(() => route.params.id,
function(educattain ) {getPovertyData(educattain )} ,
)
onMounted(function () {
    getPovertyData(route.params.educattain )/* this is a reference to the colon in the router */
})
</script>

<style scoped>

</style>
