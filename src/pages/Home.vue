<template>
  <MainLayout>
    <div slot="content">
      <div class="home">
        <ProgressBar />
        <CategoryManager />
      </div>
    </div>
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