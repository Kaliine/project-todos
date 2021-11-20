import React from 'react';
import { useSelector } from 'react-redux';

const EmptyField = () => {
  const items = useSelector((store) => store.todos.items)
  const activeTodos = items.length
  const emptyField = activeTodos === 0

  return (
    <>
    { emptyField === true &&
    <div className="empty-field">
      <h2>Nothing to do?</h2>
      <p>Let's add some todos</p>
      </div>}
    </>
  )
};

export default EmptyField