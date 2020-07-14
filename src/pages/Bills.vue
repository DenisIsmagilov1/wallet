<template>
  <MainLayout>
    <div slot="content">
      <div class="bills">
        <BillsList />
        <BillForm />
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from "../layouts/MainLayout";
import BillsList from "../components/BillsList";
import BillForm from "../components/BillForm";

export default {
  components: {
    MainLayout,
    BillsList,
    BillForm
  }
};
</script>

<style scoped>
.bills {
  display: flex;
  justify-content: center;
}

@media (max-width: 900px) {
  .bills {
    flex-direction: column-reverse;
    align-items: center;
  }
}
</style>