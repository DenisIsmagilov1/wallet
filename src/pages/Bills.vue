<template>
  <MainLayout>
    <div slot="content">
      <b-row class="bills justify-content-center">
        <BillsList />
        <BillForm />
      </b-row>
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