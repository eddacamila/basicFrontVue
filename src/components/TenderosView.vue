<template>
  <div class="tenderos">
    <h2>Panel de Ventas / Tenderos</h2>
    <button @click="accederInventario">Acceder a Inventario</button>
  </div>
</template>

<script setup>
function accederInventario() {
  alert('Inventario accesado (simulado). Aquí podrías redirigir o mostrar otra vista.')
}
</script>

<style scoped>
button {
  padding: 12px 20px;
  font-size: 16px;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #125ea6;
}
</style>
