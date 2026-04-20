<template>
  <div>
    <h1>{{ title }}</h1>
    <div>
      <button @click="updateChart(null)">All</button>
      <button @click="updateChart('1')">Manhattan</button>
      <button @click="updateChart('2')">Bronx</button>
      <button @click="updateChart('3')">Brooklyn</button>
      <button @click="updateChart('4')">Queens</button>
      <button @click="updateChart('5')">Staten Island</button>
    </div>

    <Bar :data="chartData" :options="options" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend) //cough cough

const rawData = ref([])
const chartData = ref({ labels: [], datasets: [] })
const title = ref('Average Income (All Boroughs)') //cant put with the other title thing because all isnt a boro value

const options = {
  plugins: {
    title: {
      display: true,
      text: title,
    },
  },
}
onMounted(async () => {
  const res = await fetch('https://data.cityofnewyork.us/resource/aqqw-n6ec.json')
  rawData.value = await res.json()
  updateChart(null)
})

function updateChart(boro) {
  let filtered = rawData.value
  if (boro) {
    filtered = filtered.filter((item) => item.boro === boro)
  }

  const grouped = {}
  filtered.forEach((item) => {
    const edu = Number(item.educattain)
    const income = Number(item.nycgov_income)
    if (isNaN(edu) || isNaN(income)) return //this is to remove the levl nan on pag 3
    if (!grouped[edu]) grouped[edu] = []
    grouped[edu].push(income)
  })
  const labels = []
  const values = []

  const eduNames = {
    1: 'Less than HS',
    2: 'High School',
    3: 'Some College',
    4: 'Bachelor+',
  }
  Object.entries(grouped).forEach(([edu, incomes]) => {
    labels.push(eduNames[edu] || `Level ${edu}`) //this find the avgs
    const avg = incomes.reduce((a, b) => a + b, 0) / incomes.length
    values.push(avg)
  })
  chartData.value = {
    labels,
    datasets: [
      {
        label: 'Avg Income',
        data: values,
        backgroundColor: '#36a2eb',
      },
    ],
  }
  const names = {
    1: 'Manhattan',
    2: 'Bronx',
    3: 'Brooklyn',
    4: 'Queens',
    5: 'Staten Island',
  }
  title.value = boro ? `Average Income - ${names[boro]}` : 'Average Income - All Boroughs'
} //needed for the title to be cool
</script>
