import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../app/features/todo/todoSlice'


const AddTodo = () => {
    const [input, setInput] = React.useState('')

    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    return (
        <>
            <form action="" onSubmit={addTodoHandler}>
                <input
                    type="text"
                    placeholder='Enter a todo'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <button type='submit'>Add Todo</button>
            </form >
        </>
    )
}

export default AddTodo
