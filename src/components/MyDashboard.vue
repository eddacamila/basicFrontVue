<template>
  <div class="dashboard">
    <h2>Bienvenido al Dashboard</h2>
    <button @click="goToAdmin">Para Admin</button>
    <button @click="goToVentas">Para Ventas/Tenderos</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios'
import { Permissions } from '@/utils/Permissions'

const router = useRouter()

async function validateToken(permission) {
  try {
    debugger;
    const url = import.meta.env.VITE_URL_AUTH + "/api/validation/token";
    const token = localStorage.getItem('authToken');
    
    const response = await axios.post(url, {
      token,
      permission: permission
    });

    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error during login:', error)
    return false;
  }
}

async function goToAdmin() {
  const hasAccess = await validateToken(Permissions.ADMIN_READ.value)
  if (hasAccess) {
    router.push('/admin')
  } else {
    alert('No tienes permisos para acceder al panel de administración')
  }
}

async function goToVentas() {
  const hasAccess = await validateToken(Permissions.VENDOR_READ.value)
  if (hasAccess) {
    router.push('/ventas')
  } else {
    alert('No tienes permisos para acceder al panel de ventas')
  }
}
</script>

<style scoped>
button {
  margin: 10px;
  padding: 10px 20px;
}
</style>
