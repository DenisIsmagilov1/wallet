<template>
  <b-col cols="8" class="bills__table">
    <b-table striped hover :items="getBills"></b-table>
  </b-col>
</template>

<script>
export default {
  computed: {
    getBills() {
      return this.$store.getters.bills;
    }
  }
};
</script>