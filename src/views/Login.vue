<template>
  <div class="login">
    <h1 class="title">Iniciar sesión</h1>
    <form action class="form" @submit.prevent="login(usuario)">
      <label class="form-label" for="#email">Email:</label>
      <input class="form-input" type="email" id="email" required placeholder="Ingrese email" v-model="usuario.email">
      <label class="form-label" for="#password">Contraseña:</label>
      <input class="form-input" type="password" id="password" placeholder="Ingrese contraseña"
        v-model="usuario.password">
      <input class="form-submit" type="submit" value="Acceder">
    </form>
    <p class="msg">¿No tienes cuenta?
      <router-link to="/register">Registro</router-link>
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      usuario: {
        email: 'prueba4@prueba.com',
        password: '123123'
      }
    }
  },
  methods: {
    ...mapActions(['login'])
  }
}
</script>

<style scoped>
.login {
  padding: 2rem;
}

.title {
  text-align: center;
}

.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}

.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
}

.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
}

.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
}

.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}

.msg {
  margin-top: 3rem;
  text-align: center;
}
</style>
