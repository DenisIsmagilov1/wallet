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
    },
    addNewCategory(ctx, title) {
      const newCategory = {
        id: Date.now(), title, current: 0
      }

      ctx.commit('addCategory', newCategory);
    },
    deleteCategory({ state, commit }, id) {
      const categoryIndex = state.categories.findIndex((item => item.id == id))

      commit('deleteCategory', categoryIndex)
    },
    deleteCost({ state, commit }, { title, value }) {
      const categoryIndex = state.categories.findIndex((item) => item.title == title);
      let updatedCategory = state.categories[categoryIndex];
      updatedCategory.current -= value;

      const newCategories = [
        ...state.categories.slice(0, categoryIndex),
        updatedCategory,
        ...state.categories.slice(categoryIndex + 1)
      ];

      commit('updateCategories', newCategories)
    }
  },
  mutations: {
    updateCategories(state, categories) {
      state.categories = categories;
    },
    addCategory(state, category) {
      state.categories.push(category)
    },
    deleteCategory(state, index) {
      state.categories.splice(index, 1)
    }
  },
  state: {
    budget: 24000,
    categories: [
      { id: 1, title: "Здоровье", current: 1004 },
      { id: 2, title: "Продукты", current: 777 },
      { id: 3, title: "Жилье", current: 2145 }
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