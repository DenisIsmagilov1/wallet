<template>
  <form class="bills__table__confirm-form" @submit.prevent="confirmBill">
    <b-input v-model="confirmValue" type="text" placeholder="Пополнить" />
    <b-button variant="outline-success" type="submit">+</b-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      confirmValue: ""
    };
  },
  props: ["bill"],
  methods: {
    confirmBill() {
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
</style>