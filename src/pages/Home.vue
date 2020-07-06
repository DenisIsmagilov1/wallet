<template>
  <MainLayout>
    <span slot="content">
      <ProgressBar />
      <CategoryManager />
    </span>
  </MainLayout>
</template>

<script>
import MainLayout from "../layouts/MainLayout";
import ProgressBar from "../components/ProgressBar";
import CategoryManager from "../components/CategoriesManager";

export default {
  components: {
    MainLayout,
    ProgressBar,
    CategoryManager
  }
};
</script>