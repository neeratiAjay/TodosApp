import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import TodosItems from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    taskIsCompleted: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    taskIsCompleted: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    taskIsCompleted: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    taskIsCompleted: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    taskIsCompleted: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    taskIsCompleted: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    taskIsCompleted: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    taskIsCompleted: false,
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todosList: initialTodosList, newTodoInput: ''}

  onDelete = id => {
    const {todosList} = this.state
    const updateTodoList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todosList: updateTodoList,
    })
  }

  addNewItem = () => {
    const {newTodoInput} = this.state
    if (newTodoInput.length !== 0) {
      const newItem = {
        id: uuidv4(),
        title: newTodoInput,
        taskIsCompleted: false,
      }
      this.setState(prevState => ({
        todosList: [...prevState.todosList, newItem],
        newTodoInput: '',
      }))
    }
  }

  updateNewTitle = (newTitle, id) => {
    const {todosList} = this.state
    this.setState(prevState => ({
      todosList: [
        ...prevState.todosList.map(eachTodo =>
          eachTodo.id === id ? {...eachTodo, title: newTitle} : eachTodo,
        ),
      ],
    }))
  }

  changeInput = event => {
    this.setState({newTodoInput: event.target.value})
  }

  isTaskChange = id => {
    this.setState(prevState => ({
      todosList: [
        ...prevState.todosList.map(item =>
          item.id === id
            ? {...item, taskIsCompleted: !item.taskIsCompleted}
            : item,
        ),
      ],
    }))
  }

  render() {
    const {todosList, newTodoInput} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="new-todo-container">
            <input
              type="text"
              className="input-text"
              value={newTodoInput}
              onChange={this.changeInput}
            />
            <button type="button" className="add-btn" onClick={this.addNewItem}>
              Add
            </button>
          </div>
          <ul className="flex-container">
            {todosList.map(eachTodo => (
              <TodosItems
                todoDetails={eachTodo}
                key={eachTodo.id}
                deleteTodo={this.onDelete}
                updateTodo={this.updateNewTitle}
                changeIsCHecked={this.isTaskChange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
