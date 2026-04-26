import { useState, useReducer, useRef } from "react";
import "./App.css";
import type { Todo } from "./types";
import { todosReducer } from "./reducers/todosReducer";
import ListOfTodos from "./components/ListOfTodos";
import Images from "./components/Images";

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

function App(){
    const [todos, dispatch] = useReducer(todosReducer, defaultTodos);
    const [newTodoTitle, setNewTodoTitle] = useState<string>("");
    const newTodoInputRef = useRef<HTMLInputElement>(null);

    // const [newTodo, setNewTodo] = useState<Todo>({
    //     id: todos.length + 1,
    //     title: "",
    //     description: "Some description",
    //     isDone: false,
    // });

    // function handleAddTodo() {
    //     setTodos([...todos, newTodo]);   
    // }

    function handleAddTodo() {
        dispatch({ type: "ADD_TODO", 
        payload: { 
            id: todos.length + 1, 
            title: newTodoTitle, 
            description: "Some description", 
            isDone: false 
        } });
        setNewTodoTitle("");
        if (newTodoInputRef.current) {
            newTodoInputRef.current.value = "";
        }
    }

    return (
        <>
        <div>
            <h1 className="text-3xl font-bold underline animate-pulse ">Dashboard</h1>
            <strong>Number of todos: {todos.length}</strong>
        </div>
        <h1>TodoApp</h1>
        <input placeholder="Add a todo" 
            ref={newTodoInputRef}
            onChange={(e) => setNewTodoTitle(e.target.value)} 
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    handleAddTodo();
                }
            }}
        />
        <button onClick={() => {handleAddTodo();}}>Add Todo</button>
        <ListOfTodos todos={todos} />
        < br/>
        <Images/>
        </>
    )
}

export default App;