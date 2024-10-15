import React from 'react'

const Components = () => {

    // Main function
    const User = ({name,age}) => {
       return <li>
        {name} is {age} years old.
       </li>
    }

    // List with values
    const users = [
        {
            name: 'Ashim',
            age: 23
        },
        {
            name: 'Vegeta',
            age: 1200
        }
    ]

  return (
    
    // Redering Components
    <ul>
        {users.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
        ))}
    </ul>

  )
}

export default Components