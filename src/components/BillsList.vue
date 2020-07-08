<template>
  <b-col cols="8" class="bills__table">
    <b-table striped hover :items="getBills" :fields="fields">
      <template v-slot:cell(index)="data">{{ data.index + 1 }}</template>
    </b-table>
  </b-col>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        "index",
        { key: "title", label: "Название" },
        { key: "balance", label: "Сумма" }
      ]
    };
  },
  computed: {
    getBills() {
      return this.$store.getters.bills;
    }
  }
};
</script>