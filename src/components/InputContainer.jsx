import React from 'react'
import { useState } from 'react'

export default function InputContainer(props) {

    const [InputVal, setInputVal] = useState('')
    function handlechange(e){
        setInputVal(e.target.value)
    }
  return (
    <div style={{
      display: 'flex',
      gap: '3rem',
      marginTop: '5rem',
      padding: '1rem',
    }}>
      <input 
        style={{
          fontSize: '1.5rem',
          padding: '0.5rem 1rem', 
          borderRadius: '5px', 
          border: '1px solid #333' 
        }} 
        type='text' 
        value={InputVal} 
        onChange={handlechange} 
        placeholder='Enter the task here'
      />
      <button 
        style={{
          width: '5rem',
          fontSize: '1rem',
          backgroundColor: '#007bff', // Blue background
          color: '#fff', // White text
          border: 'none',
          borderRadius: '5px', // Matching button corner radius
          cursor: 'pointer',
          transition: 'background-color 0.3s ease', // Smooth hover effect
        }}
        onClick={() => {
          console.log(InputVal);
          props.addTodos(InputVal);
          setInputVal('');
        }}
      >
        Add
      </button>
    </div>
    
  )
}
