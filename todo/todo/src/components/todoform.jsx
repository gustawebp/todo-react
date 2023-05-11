import { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value || !category) {
            return
        }
        addTodo(value,category)
        console.log(value, category)
        setValue("")
        setCategory("")
    }

    return (
        <div className="todo-form">
            <h1>Adicionar Tarefa</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Título da tarefa'
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Profissional">Profissional</option>
                </select>
                <input id='criar-botao' type="submit" value="Criar" />
            </form>
        </div>
    )
}

export default TodoForm
