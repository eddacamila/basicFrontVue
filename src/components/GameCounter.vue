<script setup>
console.log('Cpmponentes de Juego')
const isActive = true;

</script>

<template>
<button>menos</button>
<span class="counter" :class="{ 'counter--active': isActive}" style="background-color: aqua;">contador: 0</span>
<button>mas</button>
</template>


<style scoped>
button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
}
.counter {
  font-size: 2rem;
  font-weight: bold;
}
.counter--active {
  color: red;
}
</style>
