import { createContext } from "react";
import type { Todo } from "../types";

const defaultTodos: Todo[] = [
    {
        id: 1,
        title: "Learn React",
        description: "Learn the basics of React and how to build a simple app",
        isDone: false,
    },
    {
        id: 2,
        title: "Learn TypeScript",
        description: "Learn the basics of TypeScript and how to use it with React",
        isDone: false,
    },
    {
        id: 3,
        title: "Build a Todo App",
        description: "Build a simple Todo app using React and TypeScript",
        isDone: false,
    },
];

const initialContextValue = {
    todos: defaultTodos,
    dispatch: () => {},
};

const TododsContext = createContext(initialContextValue);

export default TododsContext; 