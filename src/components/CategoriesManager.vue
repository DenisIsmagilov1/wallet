<template>
  <div class="categories-manager">
    <CategoryItem :key="item.id" v-for="item in getCategories" :item="item" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CategoryItem from "./CategoryItem";

export default {
  computed: {
    ...mapGetters(["getCategories"])
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