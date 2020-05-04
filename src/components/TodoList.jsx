import React from 'react'
import Todo from './Todo'
import { ListGroup } from 'reactstrap'

const TodoList = props => {
    const { tasks, toggleItem } = props

    return (
        <div>
            <ListGroup>
                {tasks.map(item => {
                    return(
                        <Todo task={item} toggleItem={toggleItem} key={item.id}/>
                    )
                })}
            </ListGroup>
        </div>
    )
}

export default TodoList