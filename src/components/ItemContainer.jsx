import React from 'react'

export default function ItemContainer(props) {
  return (
    <div style={{
      padding: '1rem',
    }}>
      <ul style={{
        listStyleType: 'none', 
        padding: 0, 
      }}>
        {
          props.todos.map((item, index) => (
            <li 
              style={{
                margin: '0.5rem', 
                fontSize: '1rem',
              }}  
              key={index}
            >
              <span style={{fontSize:'1.3rem'}}>{item}</span>
              <button 
                style={{
                  marginLeft: '1rem',
                  backgroundColor: 'blue',
                  border: 'none',
                  borderRadius:'0.5rem',
                  color:'white',
                  padding: '0.5rem',
                  fontSize:'0.8rem',
                  cursor: 'pointer',
                  
                }}
                onClick={() => props.delTodo(item)}
              >
                Done
              </button>
            </li>
          ))
        }
      </ul>
    </div>
    
  )
}
