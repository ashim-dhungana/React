import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective, getAdjective, getAdjective2}) => {
    console.log("Rendering...")
  return (
    <div>
        This is {adjective} Navbar.

        <hr />

        <button onClick={()=>{getAdjective()}}>
            Without callBack: {getAdjective()}
        </button>

        <hr />

        <button onClick={()=>{getAdjective2()}}>
            With callBack: {getAdjective2()}
        </button>
    </div>
  )
}

export default memo(Navbar)