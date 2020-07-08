<template>
  <MainLayout>
    <div slot="content">
      <div class="bills">
        <BillsList />
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from "../layouts/MainLayout";
import BillsList from "../components/BillsList";

export default {
  components: {
    MainLayout,
    BillsList
  }
};
</script>