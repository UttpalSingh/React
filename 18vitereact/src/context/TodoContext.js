import { createContext,useContext } from "react";

export const TodoContext = createContext({ // object
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false
        }
    ],
    addTodo:(todo) => {},
    updatedTodo:(id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const TodoProvider = TodoContext.Provider

// export default function useTodo(){
//     return createContext(TodoContext)
// }
export const useTodo = () => {
    return useContext(TodoContext) //Note = You always have to pass a context inside createContext()
}