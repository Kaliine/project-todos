import React from 'react'
import { useSelector } from 'react-redux'
import ClearAll from "components/ClearAll"
import AddTodo from "components/AddTodo";




const Header = () => {

  const items = useSelector((store) => store.todos.items); //Reaching for the todos via selector
  const amountTodos = items.filter(todo => todo.isComplete).length; //Filter out the amount of completed todos
  const totalTodos = items.length; //Reaching for total amount of todo's

  return (
    <header>
    <h1>Todos</h1>
    <AddTodo />
    <div className="header-functions-container">
      <p className="counter-paragraph">Completed {amountTodos}/{totalTodos}</p>
      <ClearAll />
    </div>
    </header>
  )
}

export default Header;