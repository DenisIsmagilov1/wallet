export default {
  actions: {
    addCategoriesCost(ctx, { id, value }) {
      const categoryIndex = ctx.state.categories.findIndex((item) => item.id == id);
      const needCategory = ctx.state.categories[categoryIndex];
      needCategory.current += value;

      const newCategories = [
        ...ctx.state.categories.slice(0, categoryIndex),
        needCategory,
        ...ctx.state.categories.slice(categoryIndex + 1)
      ];

      ctx.commit('updateCategories', newCategories);
    }
  },
  mutations: {
    updateCategories(state, categories) {
      state.categories = categories;
    }
  },
  state: {
    budget: 24000,
    categories: [
      { id: 1, title: "Здоровье", current: 1004 },
      { id: 2, title: "Еда", current: 777 },
      { id: 3, title: "Жилье", current: 2145 },
      { id: 4, title: "Жилье", current: 245 },
      { id: 5, title: "Жилье", current: 2145 }
    ]
  },
  getters: {
    getBudget(state) {
      return state.budget;
    },
    getCategories(state) {
      return state.categories
    },
    getCurrent(state) {
      return state.categories.reduce((current, categories) => current + categories.current, 0)
    }
  }
}