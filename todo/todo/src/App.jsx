import { useState } from 'react'
import './App.css'
import Todo from './components/todo'
import TodoForm from './components/todoform'

function App() {
  const [todos, setTodos] = useState([
    { id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      iscompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      iscompleted: false,
    },
    {
      id: 3,
      text: "Estudar react",
      category: "Profissional",
      iscompleted: false,
    }
  ])

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      iscompleted:false
    }]
setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id ? todo : null)
    setTodos(filteredTodos)
  }

  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo removeTodo={removeTodo} key={todo.id} todo={todo} />

        ))}
      </div>


      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
