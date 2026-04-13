import { type Todo, type Action } from '../types';

export function todosReducer(state: Todo[], action: Action): Todo[] {
        switch (action.type) {
            case "ADD_TODO":
                return [...state, action.payload];
            case "TOGGLE_TODO":
                return state.map((todo) =>
                    todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
                );
            case "REMOVE_TODO":
                return state.filter((todo) => todo.id !== action.payload);
            default:
                return state;
        }
    }