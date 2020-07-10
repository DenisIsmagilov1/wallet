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
      <template v-slot:cell(Удалить)="row">
        <b-button @click="onDelete(row.item)" variant="danger">X</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      currentPage: 1,
      perPage: 10,
      fields: [
        "#",
        { key: "type", label: "Тип" },
        { key: "category", label: "Категория" },
        { key: "value", label: "Сумма" },
        "Удалить"
      ]
    };
  },
  methods: {
    ...mapActions([
      "deleteOperation",
      "deleteCost",
      "deleteBill",
      "deleteConfirm"
    ]),
    operations() {
      return this.$store.getters.getOperations;
    },
    onDelete({ id, type, category, value }) {
      if (type == "Расход") {
        this.deleteCost({ title: category, value });
      } else if (type == "Новый счет") {
        this.deleteBill(category);
      } else if (type == "Пополнение счета") {
        this.deleteConfirm({ title: category, value });
      } else {
        return;
      }
      this.deleteOperation(id);
    }
  },
  computed: {
    rows() {
      return this.$store.getters.getOperations.length;
    }
  }
};
</script>