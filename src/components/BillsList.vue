<template>
  <b-col cols="8" class="bills__table">
    <b-table striped hover fixed :items="getBills" :fields="fields">
      <template v-slot:cell(#)="data">{{ data.index + 1 }}</template>
      <template v-slot:cell(Пополнить)="row">
        <BillConfirmForm :bill="row.item" />
      </template>
    </b-table>
  </b-col>
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
      ]
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