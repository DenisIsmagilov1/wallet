export default {
  actions: {
    newBill(ctx, { title, balance }) {
      const newBill = { id: Date.now(), title, balance }

      ctx.commit('addBill', newBill)
    },
    confirmBill({ state, commit }, { id, confirm }) {
      const bills = state.bills;

      const billIndex = bills.findIndex((item) => item.id == id);
      const confirmedBill = bills[billIndex];
      confirmedBill.balance += confirm;

      const updatedBills = [
        ...bills.slice(0, billIndex),
        confirmedBill,
        ...bills.slice(billIndex + 1)
      ];

      commit('updateBills', updatedBills);
    }
  },
  mutations: {
    addBill(state, bill) {
      state.bills.push(bill)
    },
    updateBills(state, updatedBills) {
      state.bills = updatedBills;
    }
  },
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
    },
    allBalance(state) {
      return state.bills.reduce((summ, item) => summ += item.balance, 0)
    }
  }
}