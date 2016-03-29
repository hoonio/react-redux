import React from 'react'
import Footer from './Footer'
import AddToDo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

export const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)
