<template>
  <div>
    <h1>Uncharted Data</h1>
    <div v-for="(person, index) in lost" :key="index" class="row">
      <p><strong>Borough:</strong> {{ boroNames[person.boro] }}</p>
      <p><strong>Education:</strong> {{ eduNames[person.educattain] }}</p>
      <p><strong>Income:</strong> ${{ formatIncome(person.nycgov_income) }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DefMe from '@/components/DefMe.vue'
const boroNames = {
  1: 'Manhattan',
  2: 'Bronx',
  3: 'Brooklyn',
  4: 'Queens',
  5: 'Staten Island',
}

const eduNames = {
  1: 'Less than HS',
  2: 'High School',
  3: 'Some College',
  4: 'Bachelor+',
}

//I used ai to format the ugly data(no chart)
function formatIncome(val) {
  return Number(val).toLocaleString()
}
const lost = ref([])
async function GetStats() {
  try {
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

console
</script>

<style scoped>
h1 {
  color: darkblue;
}
.row {
  border-bottom: 1px solid #ccc;
  padding: 12px 0;
  margin-bottom: 10px;
}

p {
  margin: 4px 0;
}
</style>
