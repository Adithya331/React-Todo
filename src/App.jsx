import React from "react";
import InputContainer from "./components/InputContainer";
import ItemContainer from "./components/ItemContainer";
import { useState } from "react";
import Count from "./components/Count";
import './App.css'

const App = () =>{

  const [todos, setTodos] = useState([])

  const addTodos = (newTodo)=>{
    setTodos([...todos, newTodo])
  }

  const delTodo = (item) =>{
    const newTodo = todos.filter((task)=>{
      if(task !== item){
        return true;
      }
    })

    setTodos(newTodo)
  }

  return (
    <div style={{margin:0, padding:0, display:'flex', flexDirection:'column'}}>
      <div style={{display:'flex',padding:'1rem', justifyContent:'space-between', alignItems:'center', backgroundColor:'white', borderBottom:'2px solid black'}}>
        <h1>To Do List</h1>
        <Count length={todos.length}/>
      </div>
      <InputContainer addTodos={addTodos}/>
      <ItemContainer todos={todos} delTodo={delTodo } />
    </div>
  )
}

export default App;