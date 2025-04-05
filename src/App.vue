<script setup>
// import GameCounter from '@/components/GameCounter.vue'
import MyLogin from '@/components/MyLogin.vue'

</script>

<template>
   <div id="app" class="main">
    <div class="wrapper">
      <div class="wrapper__content">
        <router-view />
      </div>
    </div>

  </div>

</template>

<style scoped>
.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom right, rgb(163, 229, 221), #9198e5);
}

.wrapper {
  width: 60%;
  padding: 24px;
  border: 1px solid blueviolet;
  border-radius: 50px;
  background: linear-gradient(to bottom right, rgb(0, 166, 255), #888cb9);
}
</style>
