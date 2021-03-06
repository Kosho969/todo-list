import React from 'react'
import TodoGrid from './TodoGrid'
import TodoList from './TodoList'

class Container extends React.Component {

    state = {
        showAsGrid: false,
        newTaskTitle: '',
        query: ''
    }

    changeLayout = () => {
        const { showAsGrid } = this.state
        this.setState({ showAsGrid: !showAsGrid })
    }

    handleNewTaskTitle = (event) => {
        const newTaskTitle = event.target.value
        this.setState({ newTaskTitle })

    }

    handleSearchInput = (query) => {
        this.setState({ query })
    }

    filterData = (element) => {
        let statusCondition = false
        switch (this.props.currentStatus) {
            case 0:
                statusCondition = element.completed === false
                break;
            case 2:
                statusCondition = element.completed === true
                break;
            default:
                statusCondition = true
        }
        if (this.state.query === '') {
            return statusCondition
        }
        else {
            return statusCondition && element.title.toLowerCase().includes(this.state.query.toLowerCase())
        }
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
  }



    render() {
        return (
            <div>
                <div>
              <header>
                <h1>My todo List </h1>
              </header>

              </div>
                <form onSubmit={this.mySubmitHandler}>
                <div className="status-button-container">
                    <button className={`status-button ${0 === this.props.currentStatus ? ' selected' : ''}`} onClick={() => this.props.filterStatus(0)} > Pending </button>
                    <button className={`status-button ${1 === this.props.currentStatus ? ' selected' : ''}`} onClick={() => this.props.filterStatus(1)} > All </button>
                    <button className={`status-button ${2 === this.props.currentStatus ? ' selected' : ''}`} onClick={() => this.props.filterStatus(2)}> Completed </button>
                </div>
                <div className="grid-select">
                    Show as Grid?
                <div className="toggle-container" onClick={() => this.changeLayout()}>
                        <div className={`dialog-button ${this.state.showAsGrid ? "" : "disabled"}`}>
                        </div>
                    </div>
                </div>

</form>
                <form onSubmit={this.mySubmitHandler}>
                <div className="">
                    <input class="todo-input" placeholder="New task" onChange={(event) => this.handleNewTaskTitle(event)} value={this.state.newTaskTitle} />
                    <button onClick={() => {
                        const { newTaskTitle } = this.state
                        this.props.addTask(newTaskTitle)
                        this.setState({ newTaskTitle: '' })
                    }
                    } > <i className="fas fa-plus square"> </i> </button>
                    
                        Search:
                    <input class="todo-input" onChange={(event) => this.handleSearchInput(event.target.value)} value={this.state.query} />
                    
                </div>
                </form>
                <form onSubmit={this.mySubmitHandler}>
                {
                    this.state.showAsGrid ?
                    <div class="grid-container">
                        <TodoGrid
                            data={this.props.data.filter((element) => this.filterData(element))}
                            removeTask={this.props.removeTask}
                            completeTask={this.props.completeTask}
                        />

                        </div>
                        :
                        
                                <TodoList
                                    data={this.props.data.filter((element) => this.filterData(element))}
                                    removeTask={this.props.removeTask}
                                    completeTask={this.props.completeTask}
                                />
                                
                }

            </form>
            </div>

        )
    }
}

export default Container