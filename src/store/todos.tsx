import { createSlice } from '@reduxjs/toolkit'

export interface TodoInterface {
    id: number,
    text: string,
    completed: boolean
}

export interface TodosListInterface {
    todos: TodoInterface[]
}

const initialState: TodosListInterface = {
    todos: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        addTodo: (state, { payload: { text, id, completed } }) => {
            state.todos.push({ id, text, completed })
        },
        deleteTodo: (state, { payload: { todoId } }) => {
            state.todos = state.todos.filter((todo) => todo.id !== todoId)
        },
        editTodo: (state, { payload: { editedTodo } }) => {
            console.log('editTodo', editedTodo)
            state.todos = state.todos.map((todo) => todo.id === editedTodo.id ? editedTodo : todo)
        },
        toggleTodo: (state, { payload: { todoId } }) => {
            state.todos = state.todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)
        }
    }
})

export const { addTodo, deleteTodo, editTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
