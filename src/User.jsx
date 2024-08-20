import React from 'react'

function User(props) {
  return (
    <div>
      <h3>Task name: {props.taskname}</h3>
      <p>task content: {props.content}</p>
    </div>
  )
}

export default User
