<template>
  <b-col cols="3">
    <form @submit.prevent="onSubmit" class="bills__new-form" action>
      <h2>Новый счет</h2>
      <label for="title">Название</label>
      <input v-model="title" id="title" type="text" />
      <span v-if="($v.title.$dirty && !$v.title.required)" class="error">Пустое поле</span>

      <label for="balance">Сумма</label>
      <input v-model="balance" id="balance" type="text" />
      <span v-if="($v.balance.$dirty && !$v.balance.required)" class="error">Пустое поле</span>
      <span v-if="($v.balance.$dirty && !$v.balance.numeric)" class="error">Введите число</span>

      <b-button variant="outline-success" type="submit">Добавить</b-button>
    </form>
  </b-col>
</template>

<script>
import { required, numeric } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      title: "",
      balance: ""
    };
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
</style>