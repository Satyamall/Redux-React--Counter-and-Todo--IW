
import { Counter } from "./Components/Counter";
import "./App.css";
import Todo from "./Components/Todo";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <div>
        <h1>Todo List</h1>
        <Todo/>
      </div>
    </div>
  );
}
