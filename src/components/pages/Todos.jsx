import { useState, useEffect } from 'react'

import '../../styles/todos.css'

function Todo({title, id, setTodos})
{
    const [editMode, setEditMode] = useState(false)

    function handleInput(e)
    {
        setTodos((prevTodos) => prevTodos.map((todo) => todo.id === id ? {...todo, title: e.target.value} : todo))
    }

    return (
        <div className="to-do">
            {!editMode ? 
                <span>{title}</span>
            :
                <input value={title} onChange={(e) => handleInput(e)} maxLength={26} type='text'/>
            }
            {!editMode ? 
                <button onClick={() => setEditMode(true)}>edit</button>
            :
                <button onClick={() => {

                    setEditMode(false)
                }}>save</button>
            }
            <button onClick={() => {
                setEditMode(false)
                // setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
                console.log('testing')
            }}>delete</button>
        </div>
    )
}

export default function Todos()
{

    const [todos, setTodos] = useState([])
    const [todoInput, setTodoInput] = useState('')

    useEffect(() => {
        let setter = []

        for (let i = 0; i < 40; i++)
        {
            setter.push({
                title: `to-do ${i}`,
                id: `${i}`
            })
        }

        setTodos(setter)
    }, [])

    function handleInput(e)
    {
        setTodoInput(e.target.value)
    }

    function addTodo(todo)
    {
        setTodos(prevTodos => [...prevTodos, {title: todo, id: 0}])
        setTodoInput('')
    }


    return (
        <div id='todos-page'>
            <div id='todo-add'>
                <input maxLength={26} value={todoInput} onChange={(e) => handleInput(e)} type='text' />
                <button onClick={() => addTodo(todoInput)}>Add</button>
            </div>

            <div id='todo-list'>
                {todos.map((todo, key) => 
                    <Todo 
                        key={key} 
                        title={todo.title} 
                        id={todo.id} 
                        setTodoInput={setTodoInput}
                        todos={todos}
                    />
                )}
            </div>
            
        </div>
    )
}