import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState ={

    todos:[{
        id:1,text :'hello',completed : false
    }]
}
export const todoslice =createSlice({
    name: 'todo',
    initialState,
    reducers:{   // in context api we declare funtion here but decribe in app jsx..but we do here
        addtodo:(state,action)=>{
            const todo = {
             id:nanoid(),
             text :action.payload}
             state.todos.push(todo)
        },
        removetodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>{
             return   todo.id != action.payload
            })
        },
        updatetodo:(state,action)=>{
            state.todos.filter((todo)=> (todo.id===action.payload)?todo: todos)
        }
    }
})
export const {addtodo,removetodo,updatetodo} = todoslice.actions
export default todoslice.reducer