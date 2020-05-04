import React, {useState} from 'react'
import { ListGroupItem } from 'reactstrap'
import './Todo.css'

const Todo = props => {
    const {task, toggleItem} = props
    const [completed, setCompleted] = useState(false)

    const clickHandler = evt => {
        toggleItem(task.id)
        setCompleted(!completed)
        
    }

    return (
        <div>
            <ListGroupItem className={completed ? "list-item completed" : "list-item"} onClick={clickHandler}>{task.name}</ListGroupItem>
        </div>
    )
}

export default Todo