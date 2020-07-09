export default {
  actions: {
    newSpendOperation(ctx, { category, value }) {
      const newOperation = {
        id: Date.now(),
        type: 'Расход',
        category,
        value
      };

      ctx.commit('addOperation', newOperation);
    },
    newProfitOperation(ctx, { category, value }) {
      const newOperation = {
        id: Date.now(),
        type: 'Доход',
        category,
        value
      };

      ctx.commit('addOperation', newOperation);
    }
  },
  mutations: {
    addOperation(state, newOperation) {
      state.operations.unshift(newOperation)
    }
  },
  state: {
    operations: [
      { id: 1, type: "Расход", category: "Еда", value: 100 },
      { id: 2, type: "Доход", category: "Здоровье", value: 2455 },
      { id: 3, type: "Расход", category: "Еда", value: 123 },
      { id: 4, type: "Расход", category: "Еда", value: 574 },
      { id: 5, type: "Расход", category: "Покупки", value: 10999 },
      { id: 6, type: "Доход", category: "Карта", value: 15000 },
      { id: 7, type: "Расход", category: "Еда", value: 1020 },
      { id: 8, type: "Расход", category: "Покупки", value: 10999 },
      { id: 9, type: "Доход", category: "Карта", value: 15000 },
      { id: 10, type: "Расход", category: "Еда", value: 1020 },
      { id: 11, type: "Расход", category: "Покупки", value: 10999 },
      { id: 12, type: "Доход", category: "Карта", value: 15000 },
      { id: 13, type: "Расход", category: "Еда", value: 1020 }
    ]
  },
  getters: {
    getOperations(state) {
      return state.operations
    }
  }
}