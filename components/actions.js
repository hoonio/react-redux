import { dispatch } from 'react-redux';

export const changeState = (newState) => {
  return (dispatch, getState) => {
    if (getState().appstate.ready) {
      return;
    }
    return dispatch({
      status: newState,
      type: 'CHANGING_PAGE'
    });
  };
};

export const selectStock = (stockSymbol) => (dispatch) => {
  dispatch({
    type: 'SELECT_STOCK',
    stockSymbol,
  })
}
