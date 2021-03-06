import React from 'react'
import {TodoItem2} from './TaskItem'


const TodoGrid = (props) => {

    return (<div className="grid-container">
      {props.data.map((ele) =>
                <TodoItem2
                    key={ele.id}
                    element={ele}
                    removeTask={props.removeTask}
                    completeTask={props.completeTask}
                />)}</div>
    )
}

export default TodoGrid