<template>
  <div class="login">
    <h3 class="header-form">Вход</h3>
    <form @submit.prevent="onSubmit" class="login__form">
      <label for="login">Логин</label>
      <b-form-input :state="checkEmail" v-model="email" name="login" type="text" />
      <small v-if="($v.email.$dirty && !$v.email.required)" class="error">Введите email</small>
      <small v-if="($v.email.$dirty && !$v.email.email)" class="error">Введен не корректный email</small>
      <label for="password">Пароль</label>
      <b-form-input :state="checkPassword" v-model="password" name="password" type="password" />
      <small v-if="($v.password.$dirty && !$v.password.required)" class="error">Введите пароль</small>
      <small
        v-if="($v.password.$dirty && !$v.password.minLength)"
        class="error"
      >Пароль не должен быть менее 6 символов</small>
      <b-button variant="success" class="login__form__submit" type="submit">Войти</b-button>
      <router-link to="/register">Зарегистрироваться</router-link>
    </form>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) }
  },
  computed: {
    checkEmail() {
      if (this.$v.email.$dirty) {
        if (this.$v.email.email && this.$v.email.required) {
          return true;
        }
        return false;
      }
      return null;
    },
    checkPassword() {
      if (this.$v.password.$dirty) {
        if (this.$v.password.minLength && this.$v.password.required) {
          return true;
        }
        return false;
      }
      return null;
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