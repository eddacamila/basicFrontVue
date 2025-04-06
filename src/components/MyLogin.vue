<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

async function handleLogin() {
  try {
    const url = import.meta.env.VITE_URL_AUTH + "/api/auth/login";
    const response = await axios.post(url, {
      email: username.value,
      password: password.value
    })

    if (response.status === 200) {
      // Assuming the token comes in response.data.token
      const token = response.data.token
      
      localStorage.setItem('authToken', token)
      
      router.push('/dashboard')
    }
  } catch (error) {   
    if (error.response) {      
      alert('Credenciales no válidas. Por favor, intente nuevamente.')
    } else if (error.request) {
      
      alert('Error de autenticación. Por favor, verifique su usuario y contraseña.')
    } else {
      
      alert('Error al procesar la solicitud. Por favor, intente nuevamente.')
    }
    console.error('Error during login:', error)
  }
}

/*
function handleLoginInicial() {
  console.log('Usuario:', username.value)
  console.log('Contraseña:', password.value)
}

async function handleLoginToken() {
  try {
    const response = await axios.post('https://mi-api.com/login', {
      username: username.value,
      password: password.value
    })

    const token = response.data.token
    console.log('Token recibido:', token)

    // Guarda el token en localStorage para futuras peticiones
    localStorage.setItem('authToken', token)

    // Redirige o cambia de estado (esto depende de tu app)
    // Por ejemplo:
    // router.push('/dashboard')

  } catch (err) {
    console.error('Error al iniciar sesión:', err)
  }
}*/
</script>

<template>
  <div class="login-form">
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Usuario:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Entrar</button>
    </form>
  </div>
</template>



<style scoped>
.login-form {
  max-width: 300px;
  margin: auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input {
  display: block;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 15px;
}
</style>
