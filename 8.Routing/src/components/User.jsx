import React from 'react'
import { useParams } from 'react-router-dom'


// To access: http://localhost:5173/user/Ashim

const User = () => {
    const params = useParams()

  return (
    <div>
        I am user {params.username}
    </div>
  )
}

export default User