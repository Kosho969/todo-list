import React from 'react'
import {TodoItem} from './TaskItem'

const TodoList = (props) => {
    return (
        <div className="">
                            
             {props.data.map((ele) =>
                <TodoItem
                    key={ele.id}
                    element={ele}
                    removeTask={props.removeTask}
                    completeTask={props.completeTask}
                />
            )}
             </div>
    )
}

export default TodoList