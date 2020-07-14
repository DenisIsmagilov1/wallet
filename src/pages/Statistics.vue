<template>
  <MainLayout>
    <template v-slot:content>
      <StatGrafics />
    </template>
  </MainLayout>
</template>

<script>
import MainLayout from "../layouts/MainLayout";
import StatGrafics from "../components/StatGrfics";

export default {
  components: {
    MainLayout,
    StatGrafics
  }
};
</script>