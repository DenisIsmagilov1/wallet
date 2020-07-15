<template>
  <div>
    <form @submit.prevent="onSubmit" class="bills__new-form" action>
      <h2>Новый счет</h2>
      <label for="title">Название</label>
      <input v-model="title" id="title" type="text" />
      <validationError :errorMessage="getErrorMessageTitle" />

      <label for="balance">Сумма</label>
      <input v-model="balance" id="balance" type="text" />
      <validationError :errorMessage="getErrorMessageBalance" />

      <b-button variant="outline-success" type="submit">Добавить</b-button>
    </form>
  </div>
</template>

<script>
import { required, numeric } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
import validationError from "./validationError";

export default {
  data() {
    return {
      title: "",
      balance: ""
    };
  },
  components: {
    validationError
  },
  validations: {
    title: { required },
    balance: { required, numeric }
  },
  methods: {
    ...mapActions(["newBill", "newProfitOperation"]),
    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      this.newBill({
        title: this.title,
        balance: Number(this.balance)
      });

      this.newProfitOperation({
        category: this.title,
        value: Number(this.balance)
      });

      this.title = this.balance = "";
    }
  },
  computed: {
    getErrorMessageBalance() {
      if (this.$v.balance.$dirty && !this.$v.balance.required) {
        return "Пустое поле";
      } else if (this.$v.balance.$dirty && !this.$v.balance.numeric) {
        return "Введите число";
      } else {
        return "";
      }
    },
    getErrorMessageTitle() {
      if (this.$v.title.$dirty && !this.$v.title.required) {
        return "Пустое поле";
      } else {
        return "";
      }
    }
  }
};
</script>

<style scoped>
.bills__new-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid #28a745;
  border-radius: 10px;
}

.bills__new-form input {
  width: 100%;
}

.bills__new-form label {
  align-self: flex-start;
}

.bills__new-form button {
  margin: 20px 0 0 0;
}

@media (max-width: 900px) {
  .bills__new-form {
    margin: 0 0 20px 0;
  }
}
</style>