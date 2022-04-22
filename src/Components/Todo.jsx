import React from 'react'

import TodoItem from './TodoItem'

const Todo = (props) => {

    return (
        <div>
            {props.todos.length === 0 ? "" :
                props.todos.map((todo) => {
                    // console.log(todo.sno);
                    return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    )
                })
            }
        </div>
    )
}

export default Todo;    