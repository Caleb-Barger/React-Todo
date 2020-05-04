import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    const {tasks, toggleItem, clearCompletedItems} = props

    const clickHandler = evt => {
        clearCompletedItems()
    }

    return (
        <div>
            {tasks.map(item => {
                return(
                    <Todo task={item} toggleItem={toggleItem} key={item.id}/>
                )
            })}
            <button onClick={clickHandler}>Clear Completed</button>
        </div>
    )
}

export default TodoList