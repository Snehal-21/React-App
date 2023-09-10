import { useMemo, useState } from "react";

const Memo = () => {
    const [counter, setCounter] = useState(0);
    const [todo, settodo] = useState("");
    const [todos, settodos] = useState([])

    function Increment() {
        setCounter((x) => x + 1);
    }

    const handleChange = (e) => {
        settodo( e.target.value );
    }

    const AddTodo = (e) => {
        e.preventDefault();
        settodos([...todos, todo]);
        settodo("");
    }

    const finalCounter=useMemo(()=>expensiveCalculations(counter),[counter])

    return (
        <>
            <div className="border flex justify-center mt-14 p-5">
                <h1 className=" text-center">Counter:{counter} {finalCounter}</h1>
                <button className=" ml-5 " onClick={Increment}>Add Counter</button>
            </div>

            <div className="w-screen mt-14 border  flex flex-col justify-center">
                <h1 className="w-full text-center">TODOS:</h1>
                <input className="w-[30%] pl-2 border border-black m-auto"  value={todo} onChange={handleChange} />
                <button onClick={AddTodo}>Add Todo</button>
                {todos?.length ?
                    <div className="w-[30%] flex justify-center mt-10 flex-col m-auto">
                       <>
                       {todos.map((todo,i)=>(
                            <div className="w-full mb-2">{i}-{todo}</div>
                        ))}
                       </>
                    </div>
                    :
                    <div className="w-screen flex justify-center mt-10">
                        No todos found.
                    </div>}

            </div>

            <hr />
        </>
    )
}

function expensiveCalculations(number) {
    alert("Inside function...")
    for (let i = 0; i < 1000000000; i++) {
        number += 1
    }
    return number;
}

export default Memo;