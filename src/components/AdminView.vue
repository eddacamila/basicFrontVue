<template>
  <div>
    <h2>Ventas por Vendedor</h2>
    <table>
      <thead>
        <tr>
          <th>Vendedor</th>
          <th>Región</th>
          <th>Total Ventas</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="venta in ventas" :key="venta.id">
          <td>{{ venta.nombre }}</td>
          <td>{{ venta.region }}</td>
          <td>{{ venta.total }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const ventas = [
  { id: 1, nombre: 'Juan Pérez', region: 'Norte', total: '$2,300' },
  { id: 2, nombre: 'María Gómez', region: 'Sur', total: '$3,150' },
  { id: 3, nombre: 'Carlos Ruiz', region: 'Este', total: '$1,980' }
]
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th, td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}
th {
  background-color: blueviolet;
}
</style>
