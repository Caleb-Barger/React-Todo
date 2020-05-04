import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const tasks =  []

class App extends React.Component {
  constructor(){
    super()
    this.state = { tasks }
  }

  addItem = taskName => {
    const newItem = {
      name: taskName, 
      id: Date.now(),
      completed: false,
    }
    this.setState({
      tasks: [...this.state.tasks, newItem]
    }, () => console.log(this.state))
  }

  toggleItem = (taskId) => {
    const elementsIndex = this.state.tasks.findIndex(element => {
      return element.id === taskId
    })
    const newArray = [...this.state.tasks]
    newArray[elementsIndex] = {...newArray[elementsIndex], completed: !newArray[elementsIndex].completed}
    this.setState({ tasks: newArray })
  }

  clearCompletedItems = () => {
    const uncompletedTasks = this.state.tasks.filter(tasks => {
      return tasks.completed === false
    })
    
    this.setState({tasks: uncompletedTasks})
  }

  render() {
    return (
      <div>
        <TodoForm addItem={this.addItem}/>
        <TodoList 
          tasks={this.state.tasks} 
          toggleItem={this.toggleItem} 
          clearCompletedItems={this.clearCompletedItems}/>
      </div>
    );
  }
}

export default App;
