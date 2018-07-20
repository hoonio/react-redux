export default (state = {
  ready: false,
  page: 'home',
  data:[],
  selectedStock: '',
}, action) => {
  console.log(action)
  switch (action.type) {
    case 'CHANGING_PAGE':
      return Object.assign({}, state, {
        page: action.status
      });
    case 'SELECT_STOCK':
      return Object.assign({}, state, {
        selectedStock: action.stockSymbol
      });
    default:
      return state;
  }
};
