<template>
  <div class="small">
    <Bars :chart-data="datacollection"></Bars>
  </div>
</template>

<script>
import Bars from "../charts/Bars";

export default {
  components: {
    Bars
  },
  data() {
    return {
      datacollection: null
    };
  },
  created() {
    this.fillData();
  },
  methods: {
    fillData() {
      const colors = [
        "#f87979",
        "#d1b24d",
        "#d9e84d",
        "#4dd170",
        "#4de8bc",
        "#4d7be8",
        "#db4de8"
      ];
      const datasets = this.$store.getters.getCategories.map((item, idx) => {
        idx = idx % 7;

        return {
          label: item.title,
          backgroundColor: colors[idx],
          data: [item.current]
        };
      });

      this.datacollection = {
        labels: ["Затраты"],
        datasets
      };
    }
  }
};
</script>

<style>
.small {
  max-width: 900px;
  height: 500px;
  margin: 20px auto;
}
</style>