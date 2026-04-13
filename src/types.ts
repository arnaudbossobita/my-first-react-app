export interface Todo {
    id: number;
    title: string;
    description: string;
    isDone: boolean;
}

export type Action =
    | { type: "ADD_TODO"; payload: Todo }
    | { type: "TOGGLE_TODO"; payload: number }
    | { type: "REMOVE_TODO"; payload: number }; 
    