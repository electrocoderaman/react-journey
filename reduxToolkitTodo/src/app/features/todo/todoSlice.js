import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, textValue: "hello world" }]
}


export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                textValue: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((prev) => prev.id !== action.payload)

        }

    }
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer    