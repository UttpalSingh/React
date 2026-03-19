import { useEffect, useState } from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  // addTodo() add a new todo with specific id
  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }
  // id add in -> newtodo -> newtodo add in prevTodo
  // it means id attaches with every new todo or every todo has it's own id
  // Date.now() → gives a unique ID || ...todo → spreads the properties of the incoming todo || prev = previous state (old todo list)

  // display
  // every todo have its own id (addTodo()) so by that we can update specific todo 
  // when previous todo id matches with updateTodo id then we can update this todo
  const updatedTodo = (id,todo) => {
    setTodos((prev) => prev.map((prevTodo) =>(prevTodo.id === id ? todo : prevTodo)))
  }
  //delete
  // if prevtodo's id is equal to filter id then filter this todo(delete this todo)
  // if previous todo id is not equal to filter id then left this todo as it is(not delete)
  //filter works on true statement
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevtodo) => prevtodo.id !== id))
  }
  // edit
  // if prevTodo id is equal to togglecomplete id then change one of the condition of object(todo+id+completed) that is completed
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo,completed:!prevTodo.completed} :prevTodo))
  }
  // set item in local storage
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  // get item from local storage
  useEffect(() => {
   const todos =  JSON.parse(localStorage.getItem("todos"))
    console.log(todos);
    
   if(todos && todos.length > 0){
    setTodos(todos)
   }
  },[])

   // JSON.parse() is a static JavaScript method that converts a JSON string into a JavaScript object or array || JSON.stringify() is a built-in JavaScript method that converts JavaScript objects, arrays, or primitive values into a JSON-formatted string,



  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updatedTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id}
              className="w-full"
              >
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
