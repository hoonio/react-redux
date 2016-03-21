export default (state='SHOW_ALL', action) => {
  switch (action.type) {
    case 'FILTER_STACK':
      return action.filter
    default:
      return state
  }
}
