import React from 'react'
import { useState } from 'react'


const ToDoList = () => {

    const [arr, setArr] = useState([]);
    const [text, setText] = useState("");

    let add = () => {
        if (text.trim()) {
            setArr([...arr, text]);
            setText("")
        }
    }

    let remove = (index) => {
        const newText = [...arr];
        newText.splice(index, 1);
        setArr(newText);
    };

    return (
        <div className="container mt-5 text-center">
            <h1 className='text-center'>TO-DO-LIST</h1>
            <div className="row">
                <div className="col">
                    <input className='mt-5' onChange={(event) => setText(event.target.value)}
                        placeholder="Enter your task here.." type="text" />
                    <button onClick={add}>ADD</button>
                </div>
            </div>
            {/* <div className="row mt-2">
                        <div className="col">
                            <input value={text} onChange={change} className='row2inp' type="text" />
                            {/* <i className="fa-solid fa-trash-can fs-2"></i> */}
            {/* </div> */}
            {/* </div>  */}
            <ul>
                {arr.map((a, index) => <li className='text-start mt-2' key={index}>{a}
                    
                <button className="btn btn-danger ms-2 mt-2" onClick={remove}>remove</button>
                </li>)}
            </ul>
        </div>
    )
}

export default ToDoList