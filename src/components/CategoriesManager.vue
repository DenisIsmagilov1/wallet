<template>
  <div class="categories-manager">
    <CategoryItem :key="item.id" v-for="item in categories" :item="item" />
  </div>
</template>

<script>
import CategoryItem from "./CategoryItem";

export default {
  data() {
    return {
      categories: [
        { id: 1, title: "Здоровье", current: 1004 },
        { id: 2, title: "Еда", current: 4521 },
        { id: 3, title: "Жилье", current: 2145 },
        { id: 3, title: "Жилье", current: 2145 },
        { id: 3, title: "Жилье", current: 2145 },
        { id: 3, title: "Жилье", current: 2145 }
      ]
    };
  },
  components: {
    CategoryItem
  }
};
</script>

<style>
.categories-manager {
  display: flex;
  flex-wrap: wrap;
}
</style>