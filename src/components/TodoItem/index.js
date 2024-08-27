// Write your code here
import './index.css'
const TodosItems = props => {
  const {todoDetails, key, deleteTodo} = props
  const {title,id} = todoDetails

  const todoDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-flex-container">
      <p className="title">{title}</p>

      <button className="btn" type="button" onClick={todoDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodosItems
