import React from 'react'


const TodoItem = (props) => {
    return (
        <div className="todo" >
                            <li className="todo-item">
                    {props.element.title}</li>

                <button className="trash-btn" onClick={() => props.removeTask(props.element.id)} > <i className="fas fa-check"> </i> </button>
                {!props.element.completed ? <button className="" onClick={() => props.completeTask(props.element.id)}> <i className="fas fa-trash"> </i></button> : null}
            </div>
        
    )
}

 const TodoItem2 = (props) => {
    return (
                            <div className="grid-item">
                    {props.element.title}

                <button className="trash-btn" onClick={() => props.removeTask(props.element.id)} > <i className="fas fa-check"> </i> </button>
                {!props.element.completed ? <button className="" onClick={() => props.completeTask(props.element.id)}> <i className="fas fa-trash"> </i></button> : null}
                </div>
        
    )
}

export {
  TodoItem,
  TodoItem2,
}