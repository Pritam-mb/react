import { createContext, useContext } from "react";
export const Todocontext = createContext({
    todos : [
    {   id : 1,
         todo: " Todo msg",
          completed: false,}
    ],
    addtodo : (todos)=>{},
    deletetodo :(id)=>{},
    updatetodo: (todos,id)=>{},
    toggle: (id)=>{}
})
export const Todoprovider = Todocontext.Provider
export const useTodo = () => {
    return useContext(Todocontext)
}