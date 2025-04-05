<template>
  <div class="dashboard">
    <h2>Bienvenido al Dashboard</h2>
    <button @click="goToAdmin">Para Admin</button>
    <button @click="goToVentas">Para Ventas/Tenderos</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goToAdmin() {
  router.push('/admin')
}

function goToVentas() {
  router.push('/ventas')
}
</script>

<style scoped>
button {
  margin: 10px;
  padding: 10px 20px;
}
</style>
