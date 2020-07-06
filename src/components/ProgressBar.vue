<template>
  <div class="progress-widget">
    <span class="progress-widget__counter">{{this.current}} из {{this.max}}</span>
    <b-progress height="20px" :variant="getColor" :value="getPercent" show-progress class="mb-2"></b-progress>
  </div>
</template>

<script>
export default {
  data() {
    return {
      max: 20000,
      current: 5225
    };
  },
  computed: {
    getPercent() {
      return (this.current / this.max) * 100;
    },
    getColor() {
      if (this.current < this.max) {
        return "success";
      } else {
        return "danger";
      }
    }
  }
};
</script>

<style scoped>
.progress-widget {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
}

.progress-widget__counter {
  font-size: 1.8rem;
  margin: 0 0 20px 0;
}

.progress {
  width: 100%;
}
</style>