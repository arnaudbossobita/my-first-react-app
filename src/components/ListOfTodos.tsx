import type { JSX } from "react";
import type { Todo } from "../types";

function TodoItem({todo}: {todo: Todo}): JSX.Element {
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