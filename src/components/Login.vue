<template>
  <div class="login">
    <h3 class="header-form">Вход</h3>
    <form @submit.prevent="onSubmit" class="login__form">
      <label for="login">Логин</label>
      <b-form-input :state="checkEmail" v-model="email" name="login" type="text" />
      <validationError :errorMessage="getErrorMessageEmail" />

      <label for="password">Пароль</label>
      <b-form-input :state="checkPassword" v-model="password" name="password" type="password" />
      <validationError :errorMessage="getErrorMessagePassword" />

      <b-button variant="success" class="login__form__submit" type="submit">Войти</b-button>
      <router-link to="/register">Зарегистрироваться</router-link>
    </form>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import validationError from "./validationError";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  components: {
    validationError
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) }
  },
  computed: {
    getErrorMessageEmail() {
      if (this.$v.email.$dirty && !this.$v.email.required) {
        return "Пустое поле";
      } else if (this.$v.email.$dirty && !this.$v.email.email) {
        return "Введите корректный email";
      } else {
        return "";
      }
    },
    getErrorMessagePassword() {
      if (this.$v.password.$dirty && !this.$v.password.required) {
        return "Пустое поле";
      } else if (this.$v.password.$dirty && !this.$v.password.minLength) {
        return "Пароль менее 6 символов";
      } else {
        return "";
      }
    }
  },
  methods: {
    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.login {
  background-color: #fff;
  border-radius: 10px;
  margin: 0 0 10% 0;
  width: 290px;
}

.login__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
}

.login__form label {
  align-self: start;
}

.login__form input {
  width: 100%;
  align-self: start;
}

.login__form__submit {
  margin: 20px 0 0 0;
}
</style>