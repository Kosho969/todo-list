import React from 'react';
import './App.css';
import Container from './Components/Container';

class App extends React.Component {


  state = {
    todoList: [],
    currentStatus: 0
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        this.setState({loading: false, todoList: data })
      });
  }

  removeTask = (id) => {
    let todoList = [...this.state.todoList]
    todoList = todoList.filter((ele) => ele.id !== id)
    this.setState({ todoList })
  }

  completeTask = (id) => {
    const todoList = [...this.state.todoList]
    const todoIndex = todoList.findIndex((ele) => ele.id === id)
    todoList[todoIndex].completed = true
    this.setState({ todoList })
  }

  addTask = (titleTask) => {
    const todoList = [...this.state.todoList]
    const maxID = todoList.map((ele) => parseInt(ele.id))
    todoList.unshift({userId: 1, title: titleTask, completed: false, id: Math.max(...maxID) + 1 })
    this.setState({ todoList })
  }


  filterStatus = (newStatus) => {
    const currentStatus = newStatus
    this.setState({ currentStatus })

  }

  render() {
    return (
            <div>
              <Container
                data={this.state.todoList}
                currentStatus={this.state.currentStatus}
                removeTask={this.removeTask}
                completeTask={this.completeTask}
                addTask={this.addTask}
                filterStatus={this.filterStatus}
              />
            </div>
          )
  }
}

export default App;
