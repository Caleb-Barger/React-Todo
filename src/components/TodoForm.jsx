import React from 'react'
import { 
    InputGroup, 
    Input, 
    InputGroupButtonDropdown, 
    DropdownToggle,
    DropdownMenu, 
    DropdownItem,
    Form,
} from 'reactstrap'
import './TodoForm.css'

class TodoForm extends React.Component{
    constructor(){
        super()
        this.state = {
            currentValue: "",
            dropdownOpen: false
        }
    }

    toggleDropdown = () => {this.setState({dropdownOpen: !this.state.dropdownOpen})}

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
            <Form className="form" onSubmit={this.onSubmitHandler}>
                <InputGroup>
                    <Input 
                        type='text'
                        name='itemForm'
                        value={this.state.currentValue}
                        onChange={this.changeHandler}
                    />
                    <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                        <DropdownToggle outline caret>
                                actions
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={this.onSubmitHandler}>add todo</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={() => this.props.clearCompletedItems()}>clear completed</DropdownItem>
                        </DropdownMenu>
                    </InputGroupButtonDropdown>
                    
                </InputGroup>
            </Form>
        )
    }
}

export default TodoForm