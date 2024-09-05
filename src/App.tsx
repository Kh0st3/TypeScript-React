import { useState } from "react";
import FormAddTodo from "./components/FormAddTodo";

interface Todo {
  text: string;
  complete: boolean;
}

const initialTodos = [
  {
    text: "Learn React",
    complete: false,
  },
  {
    text: "Learn TypeScript",
    complete: true,
  },
];

const App = () => {

  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (text: string) => {
    const newTodo = {
      text,
      complete: false,
    };
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="container">
      <h1>Todo</h1>
      <FormAddTodo addTodo={addTodo}/>
      <div>
        {todos.map((todo) =>(
          <article key={todo.text}>
            <label htmlFor="todo">
              <input 
                type="checkbox" 
                checked={todo.complete}
                id="todo" 
              />
              {todo.text}
            </label>
          </article>
        ))}
      </div>
    </div>
  );
};

export default App;
