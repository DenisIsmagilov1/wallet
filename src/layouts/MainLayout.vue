<template>
  <div>
    <Header />
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  components: {
    Header
  }
};
</script>

<style scoped>
.content {
  margin: 20px auto 0 auto;
}
</style>