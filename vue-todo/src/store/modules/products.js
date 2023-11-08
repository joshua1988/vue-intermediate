const state = {
  productName: "PRODUCT",
  todoTitle: "PRODUCT TODO TITLE"
};

const getters = {
  getProductName(state) {
    return state.productName;
  },
  storedTodoItems(state) {
    return 'PRODUCT STORED ITEMS';
  }
};

const mutations = {
  toggleOneItem(state) {
    return state + 'hi';
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations
};
