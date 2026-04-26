import { useEffect, type JSX } from "react";
import type { Todo } from "../types";

function TodoItem({todo}: {todo: Todo}): JSX.Element {

useEffect(() => {
    const data = localStorage.getItem("@todos");
    const initialState = [
        {
            id: 1,
            title: "Learn React",
            description: "Learn the basics of React and how to build a simple app",
            isDone: false,
        }
    ];

    console.log(JSON.stringify(initialState));
    localStorage.setItem("@todos", JSON.stringify(initialState));

    if (data === null) {
        console.log("No data in local storage");
    } else {
        console.log("Data in local storage: ", JSON.parse(data));
    }

    return () => {
        console.log("Component unmounted");
    };
}, []);

    return (
        <strong key={todo.id} style={{display: "block"}}>
            {todo.id} - {todo.title} - {todo.description} - {todo.isDone ? "Done" : "Not Done"}
        </strong>
    )
}

export default function ListOfTodos({todos}: {todos: Todo[]}):JSX.Element {
    return (
        <div>
            {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        </div>
    )
}

// export default function ListOfTodos({todos}: {todos: Todo[]}):JSX.Element[] {
//     return todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
// }