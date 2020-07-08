export default {
  actions: {},
  mutations: {},
  state: {
    bills: [
      {
        id: 1,
        title: "Наличные",
        balance: 15000
      },
      {
        id: 2,
        title: "Карта",
        balance: 24400
      },
      {
        id: 3,
        title: "Счета",
        balance: 1503
      }
    ]
  },
  getters: {
    bills(state) {
      return state.bills
    }
  }
}