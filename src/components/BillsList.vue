<template>
  <b-table striped hover :items="getBills"></b-table>
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