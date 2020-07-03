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