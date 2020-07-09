<template>
  <b-table striped hover :fields="fields" :items="operations">
    <template v-slot:cell(#)="data">{{ data.index + 1 }}</template>
  </b-table>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        "#",
        { key: "type", label: "Тип" },
        { key: "category", label: "Категория" },
        { key: "value", label: "Сумма" }
      ]
    };
  },
  methods: {
    operations() {
      return this.$store.getters.getOperations;
    }
  }
};
</script>