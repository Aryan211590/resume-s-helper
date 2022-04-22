import React from 'react'
const TodoItem = ({ todo, onDelete }) => {
    return (
        <>
            <div className='addnew'>
                <h5 id="EXPERIENCE">{todo.title}</h5>
                <p id="pardeepverma">{todo.desc}</p>
                <button className=" del-cus btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
            </div>

            <hr />
        </>
    )
}
export default TodoItem;