<template>
  <div class="progress-widget">
    <span class="progress-widget__counter">{{getCurrent}} из {{getBudget}}</span>
    <b-progress height="20px" :variant="getColor" :value="getPercent" show-progress class="mb-2"></b-progress>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getBudget", "getCurrent"]),
    getPercent() {
      return (this.getCurrent / this.getBudget) * 100;
    },
    getColor() {
      if (this.getCurrent < this.getBudget) {
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