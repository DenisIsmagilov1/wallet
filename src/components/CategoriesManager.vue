<template>
  <div class="categories-manager">
    <CategoryItem :key="item.id" v-for="item in getCategories" :item="item" />
    <CategoryItemForm />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CategoryItem from "./CategoryItem";
import CategoryItemForm from "./CategoryItemForm";

export default {
  computed: {
    ...mapGetters(["getCategories"])
  },
  components: {
    CategoryItem,
    CategoryItemForm
  }
};
</script>

<style>
.categories-manager {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>