<template>
  <MainLayout>
    <span slot="content">
      <ProgressBar />
    </span>
  </MainLayout>
</template>

<script>
import MainLayout from "../layouts/MainLayout";
import ProgressBar from "../components/ProgressBar";

export default {
  components: {
    MainLayout,
    ProgressBar
  }
};
</script>