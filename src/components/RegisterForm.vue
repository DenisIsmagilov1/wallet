<template>
  <div class="register">
    <h1 class="header-form">Регистрация</h1>
    <form @submit.prevent="onSubmit" class="register__form">
      <label for="register">Логин</label>
      <b-form-input v-model="email" name="register" type="text" />
      <validationError :errorMessage="getErrorMessageEmail" />

      <label for="password">Пароль</label>
      <b-form-input v-model="password" name="password" type="password" />
      <validationError :errorMessage="getErrorMessagePassword" />

      <label for="repeatPassword">Повторите пароль</label>
      <b-form-input v-model="repeatPassword" name="repeatPassword" type="password" />
      <validationError :errorMessage="getErrorMessageRepeatPassword" />

      <b-button variant="success" class="register__form__submit" type="submit">Регистрация</b-button>
      <router-link to="/login">У вас уже есть аккаунт?</router-link>
    </form>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import validationError from "./validationError";

export default {
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: ""
    };
  },
  components: {
    validationError
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) },
    repeatPassword: { sameAs: sameAs("password") }
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
    },
    getErrorMessageRepeatPassword() {
      if (this.$v.repeatPassword.$dirty && !this.$v.repeatPassword.sameAs) {
        return "Пароли не совпадают";
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
.register {
  background-color: #fff;
  border-radius: 10px;
  margin: 0 0 10% 0;
  width: 290px;
}

.register__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
}

.register__form label {
  align-self: start;
}

.register__form input {
  width: 100%;
  align-self: start;
}

.register__form__submit {
  margin: 20px 0 0 0;
}
</style>