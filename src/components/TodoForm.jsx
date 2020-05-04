import React from 'react'

class TodoForm extends React.Component{

    constructor(){
        super()
        this.state = {
            currentValue: "",
        }
    }

    changeHandler = evt => {
        this.setState({currentValue: evt.target.value})
    }

    onSubmitHandler = evt => {
        evt.preventDefault()
        this.props.addItem(this.state.currentValue)
        this.setState({currentValue: ""})
    }

    render(){
        return(
            <form onSubmit={this.onSubmitHandler}>
                <input 
                    type='text'
                    name='itemForm'
                    value={this.state.currentValue}
                    onChange={this.changeHandler}
                />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm