<script setup>
import { ref, onMounted } from 'vue'
import { Scatter } from 'vue-chartjs'
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(LinearScale, PointElement, Tooltip, Legend)

const data = ref({
  datasets: [],
})

const options = {
  scales: {
    x: { type: 'linear', title: { display: true, text: 'Education' } },
    y: { title: { display: true, text: 'Income' } },
  },
}

onMounted(async () => {
  const res = await fetch('https://data.cityofnewyork.us/resource/aqqw-n6ec.json')
  const apiData = await res.json()

  data.value = {
    datasets: [
      {
        label: 'NYC Data',
        data: apiData.map((item) => ({
          x: parseFloat(item.educattain),
          y: parseFloat(item.nycgov_income),
        })),
        backgroundColor: 'blue',
      },
    ],
  }
})
</script>

<template>
  <Scatter :data="data" :options="options" />
  <h1>Yearly Salary vs Education Level (100 Person Sample)</h1>
</template>
