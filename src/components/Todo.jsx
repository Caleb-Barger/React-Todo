import React from 'react'

const Todo = props => {
    const {task, toggleItem} = props

    const clickHandler = evt => {
        toggleItem(task.id)
    }

    return (
        <div>
            <h1 onClick={clickHandler}>{task.name}</h1>
        </div>
    )
}

export default Todo