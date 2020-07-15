<template>
  <div>
    <form class="bills__table__confirm-form" @submit.prevent="confirmBill">
      <b-input v-model="confirmValue" type="text" placeholder="Пополнить" />
      <b-button variant="outline-success" type="submit">+</b-button>
    </form>
    <validationError class="bills__table__confirm-form__error" :errorMessage="getErrorMessage" />
  </div>
</template>

<script>
import { required, numeric } from "vuelidate/lib/validators";
import validationError from "./validationError";

export default {
  data() {
    return {
      confirmValue: ""
    };
  },
  components: {
    validationError
  },
  props: ["bill"],
  validations: {
    confirmValue: { required, numeric }
  },
  methods: {
    confirmBill() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      this.$store.dispatch("confirmBill", {
        id: this.bill.id,
        confirm: Number(this.confirmValue)
      });

      this.$store.dispatch("newConfirmOperation", {
        category: this.bill.title,
        value: Number(this.confirmValue)
      });
      this.confirmValue = "";
    }
  },
  computed: {
    getErrorMessage() {
      if (this.$v.confirmValue.$dirty && !this.$v.confirmValue.required) {
        return "Пустое поле";
      } else if (this.$v.confirmValue.$dirty && !this.$v.confirmValue.numeric) {
        return "Введите число";
      } else {
        return "";
      }
    }
  }
};
</script>

<style scoped>
.bills__table__confirm-form {
  display: inline-flex;
}

.bills__table__confirm-form input {
  width: 110px;
}
.bills__table__confirm-form__error {
  display: block;
  margin: 0 0 0 20px;
}
</style>