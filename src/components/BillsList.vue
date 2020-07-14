<template>
  <div class="bills__table">
    <b-table responsive="sm" striped hover :items="getBills" :fields="fields">
      <template v-slot:cell(#)="data">{{ data.index + 1 }}</template>
      <template v-slot:cell(Пополнить)="row">
        <BillConfirmForm :bill="row.item" />
      </template>
    </b-table>
  </div>
</template>

<script>
import BillConfirmForm from "./BillConfirmForm";

export default {
  data() {
    return {
      fields: [
        "#",
        { key: "title", label: "Название" },
        { key: "balance", label: "Сумма" },
        "Пополнить"
      ],
      width: window.innerWidth
    };
  },
  components: {
    BillConfirmForm
  },
  computed: {
    getBills() {
      return this.$store.getters.bills;
    }
  }
};
</script>

<style scoped>
.bills__table {
  flex: 0 0 70%;
  padding: 0 30px 0 0;
}

@media (max-width: 900px) {
  .bills__table {
    width: 100%;
    padding: 0;
  }
}
</style>