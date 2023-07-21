<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useCounterStore } from './stores/counter'

const counter = useCounterStore()

counter.setPrimaryColor()
</script>
