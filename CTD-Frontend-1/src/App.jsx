import { useReducer, useRef } from "react";
import "./App.css";
import RepasoUseState from "./clases/clase-1/hooks/1-useState/RepasoUseState";
import RepasoUseEffect from "./clases/clase-1/hooks/2-useEffect/RepasoUseEffect";
import RepasoUseRef from "./clases/clase-1/hooks/3-useRef/RepasoUseRef";
import RepasoUseContext from "./clases/clase-1/hooks/4-useContext/RepasoUseContext";
import todoReducer, {
  initialState,
} from "./clases/clase-1/hooks/5-useReducer/todoReducer";
import EjemplosDocumentacion from "./clases/clase-3/EjemplosDocumentacion";

function App() {
  /*useReducer*/

  const inputRef = useRef();

  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const handleSubmit = (e) => {
    e.preventDefault();

    const action = {
      type: "[TODO] add todo",
      payload: { toDo: inputRef.current.value },
    };
    dispatch(action);
  };

  console.log(todos);

  /*useReducer*/

  return (
    <>
      <h1>Hola, aquí empezamos Frontend I</h1>

      <RepasoUseState />
      <hr />

      <RepasoUseEffect />
      <hr />

      <RepasoUseRef />
      <hr />

      <RepasoUseContext />
      <hr />

      <h2>Repaso useReducer</h2>

      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Agregar tarea" />
        <button type="submit">Agregar Tarea</button>
      </form>

      <ol>
        {todos.map((item) => {
          return <li>{item.toDo}</li>;
        })}
      </ol>

      <hr />
      <EjemplosDocumentacion />
    </>
  );
}

export default App;
