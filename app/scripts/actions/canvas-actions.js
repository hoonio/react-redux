import 'babel-polyfill'
import jsonp from 'jsonp-es6'
import { dispatch } from 'react-redux'

export const REQUEST_CANVAS = 'REQUEST_CANVAS'

const requestCanvas = () => ({
  type: REQUEST_CANVAS
})

export const RECEIVE_CANVAS = 'RECEIVE_CANVAS'

const receiveCanvas = (array) => ({
  type: RECEIVE_CANVAS,
  stockList: array
})

export const getCanvas = () => {
  return (dispatch) => {
    dispatch(requestCanvas())
    return jsonp('/brainwave')
      .then(resp => {
        dispatch(receiveCanvas(resp))
      })
  }
}

export const getCanvasIfNeeded = () => {
  return (dispatch, getState) => {
    if (getState().canvas.ready) {
      return
    }
    return dispatch(getCanvas())
  }
}
