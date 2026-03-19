<template>
    <router-link :to="PovPath" class="card">
        <h2>{{ props.lost.educattain }}</h2>
        <h2>{{ props.lost.esr }}</h2>
    </router-link>

</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
    lost: {
        type:Object,
        required:true
    },
    id: {
        type:Number,
        required:true
    },
})
const PovPath = computed(() => {
    return `/poverty/${props.lost.esr}`
})
</script>

<style scoped>
/* .card {
    display: block;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
    margin-bottom: 1rem;
    transition: box-shadow 0.3s ease;
} */
</style>
