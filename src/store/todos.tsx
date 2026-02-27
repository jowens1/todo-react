import { UnknownAction } from 'redux'
interface todoInterface {
    id: number,
    text: string,
    completed: boolean
}

const initialState: todoInterface[] = [{ id: 0, text: 'init', completed: true }];

function nextTodoId(todos: todoInterface[]) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}


export default function todosReducer(state = initialState, action: UnknownAction) {
    switch (action.type) {
        case 'todos/todoAdded': {
            return [...state, {
                id: nextTodoId(state),
                text: action.payload,
                completed: false
            }]
        }
        default:
            return state
    }

}