import React, { useCallback, useState } from 'react'
import TodoComponent from './TodoComponent';

const Callback = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["New todo", "new TODO"]);
    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);
  return (
    <>
    <TodoComponent todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
    </>
  )
}

export default Callback;