import React, { memo } from 'react'

const TodoComponent = ({ todos, addTodo }) => {
    alert("Todos component re-render");
  return (
    <>
     <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
    </>
  )
}

export default memo(TodoComponent);