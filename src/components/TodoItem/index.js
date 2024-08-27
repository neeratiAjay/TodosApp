// Write your code here
import {useState} from 'react'

import './index.css'

const TodosItems = props => {
  const {todoDetails, deleteTodo, updateTodo, changeIsCHecked} = props
  const {title, id, taskIsCompleted} = todoDetails

  const [isEditing, setEdit] = useState(false)
  const [newTitle, setTitle] = useState(title)

  const todoDelete = () => {
    deleteTodo(id)
  }
  const onClickEditTodo = () => {
    setEdit(true)
  }
  const saveTodo = () => {
    if (newTitle.length !== 0) {
      updateTodo(newTitle, id)
      setEdit(false)
    }
  }
  const updateTitle = event => {
    setTitle(event.target.value)
  }

  const changeTask = () => {
    changeIsCHecked(id)
  }

  const isChecked = taskIsCompleted ? 'checked' : 'not-checked'

  return (
    <li className="list-flex-container" key={id}>
      {isEditing ? (
        <div className="editing-container">
          <input
            type="text"
            value={newTitle}
            className="edit-input"
            onChange={updateTitle}
          />
          <button type="button" className="save-btn" onClick={saveTodo}>
            Save
          </button>
        </div>
      ) : (
        <>
          <input
            type="checkbox"
            className="check-box"
            checked={taskIsCompleted}
            onChange={changeTask}
          />
          <p className={` title ${isChecked}`}>{title}</p>
          <button className="edit-btn" type="button" onClick={onClickEditTodo}>
            Edit
          </button>

          <button className="btn" type="button" onClick={todoDelete}>
            Delete
          </button>
        </>
      )}
    </li>
  )
}

export default TodosItems
