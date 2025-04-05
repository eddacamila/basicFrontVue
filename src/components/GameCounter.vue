<script setup>
const number = 1000
const id = Math.random()
</script>

<template>
  <div class = "counter-game">
    <span :id="id" class = "number">{{ number }}</span>


    <div class="button-group">
      <button>-</button>
      <button>+</button>
    </div>


  </div>
</template>


<style scoped lang="scss">
.counter-game {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.number {
  font-size: 5rem;
  font-weight: bold;
  color: white;
  opacity: 0.9;
  transition: all 0.3s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;

}

.number:hover {
  transform: scale(1.1);
  color: rgb(219, 234, 254);
}

.button-group {
  display: flex;
  gap: 1rem;
}

.clue {
  position: absolute;
  top: 1rem;
  right: 1rem;

}

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
