<template>
  <div class="register">
    <h1 class="header-form">Регистрация</h1>
    <form @submit.prevent="onSubmit" class="register__form">
      <label for="register">Логин</label>
      <b-form-input :state="checkEmail" v-model="email" name="register" type="text" />
      <small v-if="($v.email.$dirty && !$v.email.required)" class="error">Введите email</small>
      <small v-if="($v.email.$dirty && !$v.email.email)" class="error">Введен не корректный email</small>
      <label for="password">Пароль</label>
      <b-form-input :state="checkPassword" v-model="password" name="password" type="password" />
      <small v-if="($v.password.$dirty && !$v.password.required)" class="error">Введите пароль</small>
      <small
        v-if="($v.password.$dirty && !$v.password.minLength)"
        class="error"
      >Пароль не должен быть менее 6 символов</small>
      <label for="repeatPassword">Повторите пароль</label>
      <b-form-input
        :state="checkRepeatPassword"
        v-model="repeatPassword"
        name="repeatPassword"
        type="password"
      />
      <small
        v-if="($v.repeatPassword.$dirty && !$v.repeatPassword.sameAs)"
        class="error"
      >Пароли не совпадают</small>
      <b-button variant="success" class="register__form__submit" type="submit">Регистрация</b-button>
      <router-link to="/login">У вас уже есть аккаунт?</router-link>
    </form>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: ""
    };
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) },
    repeatPassword: { sameAs: sameAs("password") }
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
    },
    checkRepeatPassword() {
      if (this.$v.repeatPassword.$dirty) {
        if (this.$v.repeatPassword.sameAs) {
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