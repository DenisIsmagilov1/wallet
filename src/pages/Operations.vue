<template>
  <MainLayout>
    <template v-slot:content>
      <OperationsList />
    </template>
  </MainLayout>
</template>

<script>
import MainLayout from "../layouts/MainLayout";
import OperationsList from "../components/OperationsList";

export default {
  components: {
    MainLayout,
    OperationsList
  }
};
</script>