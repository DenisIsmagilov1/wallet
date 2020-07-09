<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="operations-table"
    ></b-pagination>
    <b-table
      id="operations-table"
      striped
      hover
      :fields="fields"
      :items="$store.getters.getOperations"
      :per-page="perPage"
      :current-page="currentPage"
    >
      <template v-slot:cell(#)="data">{{ data.index + 1 }}</template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      perPage: 10,
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
  },
  computed: {
    rows() {
      return this.$store.getters.getOperations.length;
    }
  }
};
</script>