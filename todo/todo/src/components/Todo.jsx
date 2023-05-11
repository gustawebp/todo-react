import React from 'react'


const todo = ({ todo, removeTodo }) => {
  return (
    <div className="todo">
    <div className="content">
    <p className='todo-text'>{todo.text}</p>
    <p className='todo-category'>{todo.category}</p>
    <p className='todo-iscompleted'>{todo.iscompleted}</p>
    </div>
    <div className='button-div'>
      <button id='completar-botao'>Completar</button>
      <button   onClick={() => removeTodo(todo.id) } id='cancelar-botao'>X</button>
    </div>
    
  </div>
  )
}

export default todo