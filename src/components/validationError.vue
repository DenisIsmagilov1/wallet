<template>
  <span :class="{active: errorMessage}" class="error">{{errorMessage}}</span>
</template>

<script>
export default {
  props: ["errorMessage"]
};
</script>

<style scoped>
.error {
  color: #dc3545;
  visibility: hidden;
  height: 1rem;
}

.error.active {
  visibility: visible;
}
</style>