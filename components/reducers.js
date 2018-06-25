export default (state = {
  ready: false,
  page: 'home',
  data:[]
}, action) => {
  console.log(action)
  switch (action.type) {
    case 'CHANGING_PAGE':
      return Object.assign({}, state, {
        page: action.status
      });
    default:
      return state;
  }
};
