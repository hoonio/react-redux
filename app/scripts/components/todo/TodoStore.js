import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './TodoReducers'
import TodoApp from './components/TodoApp'

const Store = () => (
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>
)

export default Store
