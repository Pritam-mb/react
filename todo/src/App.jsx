import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Todo from './components/Todo'
import './App.css'
import { Todoprovider } from './context/Todocontext'
import Todoitem from './components/Todoitem'

function App() {
const [todos,settodos] = useState([])
const addtodo=(todo)=>{
    return settodos((prev)=>[{id: Date.now(),...todo},...prev]) // add new element in the prev arrey
}
const updatetodo =(todo,id)=>{
  settodos((prev)=>prev.map((prevtodo)=> (prevtodo.id===id)?todo :prevtodo))
}
const deletetodo =(id)=>{
  settodos((prev)=> prev.filter((prevtodo)=> prevtodo.id !== id))
}
const toggle =(id)=>{
settodos((prev)=> prev.map((prevtodo)=> prevtodo.id===id ? {...prevtodo, completed: !prevtodo.completed}: prevtodo))
}

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      settodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <Todoprovider value={{todos,addtodo,deletetodo,updatetodo,toggle}}>
<div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                      <Todo/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>{
                        return  <div key={todo.id} className='w-full'><Todoitem todo={todo}/></div>
                        })}
                    </div>
                </div>
            </div>    
    </Todoprovider>
  )
}

export default App
