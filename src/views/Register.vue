<template>
  <div class="register">
    <h1 class="title">Registro de usuarios</h1>
    <form action class="form" @submit.prevent="submitForm({ email, password })">
      <label class="form-label" for="#email">Email:</label>
      <input v-model="email" class="form-input" type="email" id="email" required placeholder="Email">
      <label class="form-label" for="#password">Contraseña:</label>
      <input v-model="passwordRepeat" class="form-input" type="password" id="passwordRepeat" required
        placeholder="Password">
      <label class="form-label" for="#password-repeat">Repite la contraeña:</label>
      <input v-model="password" class="form-input" type="password" id="password" required placeholder="Password">
      <label class="form-label-error" v-if="passwordRepeat != password">
        * Contraseñas no coinciden
      </label>
      <input class="form-submit" type="submit" value="Registrarse" v-if="passwordRepeat == password">
      <input disabled class="form-submit-error" type="submit" value="Registrarse" v-if="passwordRepeat != password">
    </form>

  </div>
</template>

<script>
import router from "../router";

export default {
  data() {
    return {
      errors: [],
      email: null,
      password: null,
    }
  },
  methods: {
    async submitForm(emails, passwords) {
      const data = {
        email: emails,
        password: passwords
      }
      console.log(data.email)
      fetch('http://localhost:3001/api/user/register', {
        method: 'POST',
        body: JSON.stringify(data.email),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(router.push("/login"));
    }
  }
}

</script>

<style lang="css" scoped>
.register {
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

.form-label-error {
  margin-top: 2rem;
  color: red;
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

.form-submit-error {
  background: #48504e;
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
</style>
