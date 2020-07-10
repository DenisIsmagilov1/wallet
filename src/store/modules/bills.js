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
    },
    deleteBill({ state, commit }, title) {
      const billIndex = state.bills.findIndex((item) => item.title == title);

      commit('deleteBill', billIndex);
    },
    deleteConfirm({ state, commit }, { title, value }) {
      const billIndex = state.bills.findIndex((item) => item.title == title);
      let updatedBill = state.bills[billIndex];
      updatedBill.balance -= value;

      const newBills = [
        ...state.bills.slice(0, billIndex),
        updatedBill,
        ...state.bills.slice(billIndex + 1)
      ];

      commit('updateBills', newBills)
    }
  },
  mutations: {
    addBill(state, bill) {
      state.bills.push(bill)
    },
    updateBills(state, updatedBills) {
      state.bills = updatedBills;
    },
    deleteBill(state, index) {
      state.bills.splice(index, 1);
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